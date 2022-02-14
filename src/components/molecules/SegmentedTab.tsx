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
} from 'react-native';
import styled from '@emotion/native';
import { palette } from '@styles';
import { ViewStyleProps } from '@types';
import { AScrollView, AText, ATouchableOpacity } from '../atoms';

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
  setSelectedIdx: (newIndex: number) => void;
  refreshing?: boolean;
  style?: ViewStyleProps;
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

  /* indicator x 위치 */
  const onScrollTab = (index: number) => {
    tabContainerRef.current?.scrollTo({
      x:
        measures.filter((_, idx) => idx <= index).reduce((ac, v) => ac + v.x, 0) -
        width,
    });
  };

  const onPress = (index: number) => {
    flatlistRef.current?.scrollToIndex({ index });
  };

  return (
    <>
      <TabContainer ref={tabContainerRef} horizontal style={props.style}>
        {props.views.map((v, idx) => (
          <ATouchableOpacity
            key={idx}
            onPress={() => onPress(idx)}
            style={{ marginHorizontal: 16 }}
          >
            <TabText
              idx={idx}
              ref={tabTextRefs[idx]}
              inputRange={inputRange}
              selected={idx === selectedIdx}
              scrollX={scrollX}
            >
              {v.name}
            </TabText>
          </ATouchableOpacity>
        ))}
        {measures.length > 0 && measures.length === props.views.length && (
          <Indicator inputRange={inputRange} measures={measures} scrollX={scrollX} />
        )}
      </TabContainer>

      <Animated.FlatList
        refreshControl={<RefreshControl refreshing={!!props.refreshing} />}
        data={props.views}
        keyExtractor={item => item.name}
        ref={flatlistRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={({ nativeEvent: { contentOffset } }) => {
          const { x } = contentOffset;
          scrollX.setValue(x);
          const index = Math.floor((x + width / 2) / width);
          if (index !== selectedIdx) {
            setSelectedIdx(index);
            onScrollTab(index);
          }
        }}
        bounces={false}
        // 🐞.. item마다 height가 다르지만 최대 긴 height로 고정된다.
        renderItem={({ item }) => (
          <View
            style={{
              width,
              minHeight: height - 190 - 163,
            }}
          >
            {item.child}
          </View>
        )}
        ListEmptyComponent={() => (
          <AText
            pcolor="gray3"
            style={{
              width,
              textAlign: 'center',
              marginVertical: 15,
            }}
          >
            뷰가 없습니다.
          </AText>
        )}
      />
    </>
  );
};

const TabContainer = styled(AScrollView)`
  flex-direction: row;
  height: 42px;
  border-bottom-width: 1px;
  border-bottom-color: ${palette.gray2};
`;

/*
  TabText 
*/
interface TabTextProps {
  idx: number;
  inputRange: number[];
  selected: boolean;
  children: string;
  scrollX: Animated.Value;
}
const TabText = React.forwardRef<Text, TabTextProps>((props, ref) => {
  const color =
    props.inputRange.length === 1
      ? palette.primary
      : // 포커싱 되면 primary color로
        props.scrollX.interpolate({
          inputRange: props.inputRange,
          outputRange: props.inputRange.map(v =>
            v === props.idx * width ? palette.primary : palette.gray3,
          ),
        });

  return (
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
        bottom: 0,
        left: 0,
        width: indicatorWidth,
        transform: [{ translateX: indicatorX }],
        backgroundColor: palette.primary,
      }}
    />
  );
};
