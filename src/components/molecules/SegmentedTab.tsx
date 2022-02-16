import React, { useState, useEffect, useRef } from 'react';
import {
  Dimensions,
  findNodeHandle,
  Text,
  Animated,
  View,
  ScrollView,
  FlatList,
  RefreshControl,
  Easing,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { getSpaceStyle, palette, SpaceProps } from '@styles';
import { MeasureType, ViewStyleProps } from '@types';
import {
  AScrollView,
  AText,
  ATouchableOpacity,
  HelpText,
  WINDOW_WIDTH,
} from '../atoms';

interface SegmentedInnerView {
  name: string;
  child: JSX.Element[] | JSX.Element;
}

interface Props extends SpaceProps {
  views: SegmentedInnerView[];
  refreshing?: boolean;
  selectedIdx: number;
  setSelectedIdx: (newIndex: number) => void;
}

const MAX_TAB_INDEX = 10;

export const SegmentedTab = ({
  views,
  refreshing,
  selectedIdx,
  setSelectedIdx,
  ...props
}: Props) => {
  const [measures, setMeasures] = useState<MeasureType[]>([]);

  const flatlistRef = useRef<FlatList<SegmentedInnerView>>(null);
  const tabContainerRef = useRef<ScrollView>(null);
  const tabTextRefs = [...Array(MAX_TAB_INDEX)].map(_ => useRef<Text>(null));

  // animation variable
  const inputRange = views.map((_, i) => i * WINDOW_WIDTH);
  const scrollX = useRef(new Animated.Value(0)).current;

  /* indicator 길이 구하기 */
  useEffect(() => {
    // 그냥 tabContainerRef.current 넣으면 타입에러가 발생한다.
    const containerNode = findNodeHandle(tabContainerRef.current);
    if (containerNode === null) return;

    const m: MeasureType[] = [];
    tabTextRefs.forEach(ref => {
      ref.current?.measureLayout(
        containerNode,
        (x, y, width, height) => {
          m.push({ x, y, width, height });
          // 전체 TabText Layout를 구하면 state에 적용한다.
          if (m.length === views.length) setMeasures(m);
        },
        () => console.error('Measure Layout Fail'),
      );
    });
  }, [views]);

  const isIndicatorVisible = measures.length > 0 && measures.length === views.length;

  /* indicator x 위치 */
  const scrollToTap = (index: number) => {
    tabContainerRef.current?.scrollTo({
      x: measures.splice(0, index).reduce((ac, { x }) => ac + x, 0) - WINDOW_WIDTH,
    });
  };

  const onScrollFlatList = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x } = e.nativeEvent.contentOffset;
    scrollX.setValue(x);

    const targetIndex = Math.floor((x + WINDOW_WIDTH / 2) / WINDOW_WIDTH);
    if (targetIndex !== selectedIdx) {
      setSelectedIdx(targetIndex);
      scrollToTap(targetIndex);
    }
  };

  // props

  const getTabTitleProps = (index: number) => ({
    ref: tabTextRefs[index],
    index,
    inputRange,
    selected: index === selectedIdx,
    scrollX,
    onPress: () => flatlistRef.current?.scrollToIndex({ index }),
  });

  const indicatorProps = {
    inputRange,
    measures,
    scrollX,
  };

  return (
    <>
      <ScrollView
        ref={tabContainerRef}
        horizontal
        bounces={false}
        style={[styles.scroll, getSpaceStyle(props)]}
      >
        {views.map((v, index) => (
          <TabTitle key={index} {...getTabTitleProps(index)}>
            {v.name}
          </TabTitle>
        ))}
        {isIndicatorVisible && <Indicator {...indicatorProps} />}
      </ScrollView>

      <Animated.FlatList
        ref={flatlistRef}
        data={views}
        keyExtractor={item => item.name}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollFlatList}
        refreshControl={<RefreshControl refreshing={!!refreshing} />}
        renderItem={({ item }) => (
          <AScrollView style={{ flex: 1, width: WINDOW_WIDTH }}>
            {item.child}
          </AScrollView>
        )}
        ListEmptyComponent={() => (
          <HelpText style={styles.emptyText}>뷰가 없습니다.</HelpText>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexDirection: 'row',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray2,
  },
  emptyText: {
    marginLeft: 24,
    marginVertical: 16,
  },
});

/*
  TabText 
*/
interface TabTextProps {
  index: number;
  inputRange: number[];
  selected: boolean;
  children: string;
  scrollX: Animated.Value;
  onPress: () => void;
}
const TabTitle = React.forwardRef<Text, TabTextProps>((props, ref) => {
  const color =
    props.inputRange.length === 1
      ? palette.primary
      : // 포커싱 되면 primary color로
        props.scrollX.interpolate({
          inputRange: props.inputRange,
          outputRange: props.inputRange.map(v =>
            v === props.index * WINDOW_WIDTH ? palette.primary : palette.gray3,
          ),
        });

  return (
    <ATouchableOpacity onPress={props.onPress} style={{ marginLeft: 24 }}>
      <Animated.Text
        ref={ref}
        style={{
          fontSize: 22,
          fontWeight: props.selected ? '700' : '400',
          color,
        }}
      >
        {props.children}
      </Animated.Text>
    </ATouchableOpacity>
  );
});

/*
  Indicator 
*/
interface IndicatorProps {
  inputRange: number[];
  measures: MeasureType[];
  scrollX: Animated.Value;
}
const Indicator = ({ inputRange, measures, scrollX }: IndicatorProps) => {
  const indicatorWidth =
    measures.length === 1
      ? measures[0].width
      : scrollX.interpolate({
          inputRange,
          outputRange: measures.map(m => m.width),
          easing: Easing.exp,
        });
  const indicatorX =
    measures.length === 1
      ? measures[0].x
      : scrollX.interpolate({
          inputRange,
          outputRange: measures.map(m => m.x),
          easing: Easing.exp,
        });
  return (
    <Animated.View
      style={{
        height: 2,
        position: 'absolute',
        bottom: -1,
        left: 0,
        width: indicatorWidth,
        transform: [{ translateX: indicatorX }],
        backgroundColor: palette.primary,
      }}
    />
  );
};
