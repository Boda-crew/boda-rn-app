import React from 'react';
import {
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
} from 'react-native';
import { WINDOW_HEIGHT } from './CustomLayouts';

interface AScrollViewProps extends ScrollViewProps {
  /**
   * 하단 컨탠츠가 가려 질 수 있어 padding를 추가해준다.
   */
  bottomSpace?: keyof typeof bottomSpaces;
  refreshing?: boolean;
  onRefresh?: () => void;
  children: React.ReactNode;
}
/**
 * Indicator X, Keyboard Persist X, EestedScroll
 * @bottomSpace contentContainer는 화면 절반의 여백을 갖는다.
 * @refreshing RefreshControl 사용 및 refreshing 값
 */
export const AScrollView = React.forwardRef<ScrollView, AScrollViewProps>(
  ({ bottomSpace = 'quad', refreshing, onRefresh, ...props }, ref) => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        nestedScrollEnabled
        refreshControl={
          refreshing === undefined ? undefined : (
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          )
        }
        ref={ref}
        {...props}
        contentContainerStyle={[
          bottomSpaces[bottomSpace],
          props.contentContainerStyle,
        ]}
      />
    );
  },
);

const bottomSpaces = StyleSheet.create({
  half: {
    paddingBottom: WINDOW_HEIGHT / 2,
  },
  quad: {
    paddingBottom: WINDOW_HEIGHT / 4,
  },
  rem: {
    paddingBottom: 16,
  },
});

/**
 * keyboard에 반응하는 AScrollView
 */
export const KeyboardAvoidScroll = React.forwardRef<ScrollView, AScrollViewProps>(
  (props: AScrollViewProps, ref) => (
    <AScrollView ref={ref} {...props}>
      <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
        {props.children}
      </KeyboardAvoidingView>
    </AScrollView>
  ),
);
