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

// -------------------------------------------------

const { height, width } = Dimensions.get('window');
export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;

// -------------------------------------------------

interface WrapperProps extends ViewProps {
  children?: React.ReactNode;
  childStyle?: ViewStyleProps;
}

export const Wrapper = ({ childStyle, children, ...viewProps }: WrapperProps) => (
  <View {...viewProps}>
    {React.Children.map(children, child => {
      const element = child as any;
      return React.cloneElement(element, {
        style: [element.props.style, childStyle],
      });
    })}
  </View>
);

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

// -------------------------------------------------

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const DismissKeyboard = (props: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    {props.children}
  </TouchableWithoutFeedback>
);
