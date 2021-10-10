import { css } from '@emotion/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
} from 'react-native';
import { WINDOW_HEIGHT } from './Layout';

interface AScrollViewProps extends ScrollViewProps {
  /**
   * 하단 컨탠츠가 가려 질 수 있어 padding를 추가해준다.
   */
  bottomSpaces: keyof typeof bottomSpaces;
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
  (props, ref) => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        nestedScrollEnabled
        refreshControl={
          props.refreshing === undefined ? undefined : (
            <RefreshControl
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          )
        }
        ref={ref}
        {...props}
        style={[props.style]}
        contentContainerStyle={[
          bottomSpaces[props.bottomSpaces],
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
      <KeyboardAvoidingView
        behavior={'position'}
        style={css`
          flex: 1;
        `}
      >
        {props.children}
      </KeyboardAvoidingView>
    </AScrollView>
  ),
);