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
import { palette } from '@styles';
import { ViewStyleProps } from '@types';
import { AText, ATouchableOpacity } from '../atoms';

const { width, height } = Dimensions.get('screen');

type MeasureType = {
  x: number;
  y: number;
  width: number;
  height: number;
};

interface SegmentedInnerView {
  name: string;
  child: JSX.Element[] | JSX.Element;
}

interface Props {
  views: SegmentedInnerView[];
  selectedIdx: number;
  refreshing?: boolean;
  style?: ViewStyleProps;
  setSelectedIdx: (newIndex: number) => void;
}

export const SegmentedTab = ({ selectedIdx, setSelectedIdx, ...props }: Props) => {
  const [measures, setMeasures] = useState<MeasureType[]>([]);

  const flatlistRef = useRef<FlatList<SegmentedInnerView>>(null);
  const tabContainerRef = useRef<ScrollView>(null);

  // 동적으로 할당하면 hook이랑 충돌 난다.. 최대 10개 수업으로 일단
  const tabTextRefs = [...Array(10)].map(_ => useRef<Text>(null));
  // animation
  const inputRange = props.views.map((_, i) => i * width);
  const scrollX = useRef(new Animated.Value(0)).current;

  /* indicator 길이 */
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
          if (m.length === props.views.length) setMeasures(m);
        },
        () => console.log('Measure Layout Fail'),
      );
    });
  }, [props.views]);

  const isIndicatorVisible =
    measures.length > 0 && measures.length === props.views.length;

  /* indicator x 위치 */
  const onScrollTab = (index: number) => {
    tabContainerRef.current?.scrollTo({
      x:
        measures.filter((_, idx) => idx <= index).reduce((ac, v) => ac + v.x, 0) -
        width,
    });
  };

  const onScrollFlatList = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x } = e.nativeEvent.contentOffset;
    scrollX.setValue(x);
    const index = Math.floor((x + width / 2) / width);
    if (index !== selectedIdx) {
      setSelectedIdx(index);
      onScrollTab(index);
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
        style={[styles.scroll, props.style]}
      >
        {props.views.map((v, index) => (
          <TabTitle key={index} {...getTabTitleProps(index)}>
            {v.name}
          </TabTitle>
        ))}
        {isIndicatorVisible && <Indicator {...indicatorProps} />}
      </ScrollView>

      <Animated.FlatList
        ref={flatlistRef}
        data={props.views}
        keyExtractor={item => item.name}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollFlatList}
        contentContainerStyle={{ marginTop: 24 }}
        refreshControl={<RefreshControl refreshing={!!props.refreshing} />}
        renderItem={({ item }) => (
          <View style={{ width, minHeight: height - 190 - 163 }}>{item.child}</View>
        )}
        ListEmptyComponent={() => (
          <AText pcolor="gray3" style={styles.emptyText}>
            뷰가 없습니다.
          </AText>
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
            v === props.index * width ? palette.primary : palette.gray3,
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
