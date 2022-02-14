import { ViewStyleProps } from '@types';
import styled from '@emotion/native';
import React from 'react';
import {
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { palette } from '@styles';

// -------------------------------------------------

const { height, width } = Dimensions.get('window');
export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;

// -------------------------------------------------

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

interface WrapperProps extends ViewProps {
  children?: React.ReactNode;
  gapStyle?: ViewStyleProps;
}

export const Wrapper = ({ gapStyle, children, ...viewProps }: WrapperProps) => (
  <View {...viewProps}>
    {React.Children.map(children, (child, index) => {
      const element = child as any;
      if (!element) return;

      return React.cloneElement(element, {
        style: [element.props.style, index && gapStyle],
      });
    })}
  </View>
);

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

// -------------------------------------------------

export const DismissKeyboard = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

interface BlankProps {
  height?: number;
  width?: number;
}
export const Blank = ({ height, width }: BlankProps) => (
  <View style={{ height, width }} />
);

export const Separator = styled.View`
  height: 20px;
  background-color: ${palette.gray1};
`;
