import React from 'react';
import {
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { ViewStyleProps } from '@types';
import { palette } from '@styles';

// -------------------------------------------------

const { height, width } = Dimensions.get('window');
export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;

// -------------------------------------------------

export const Container = ({ style, ...props }: SafeAreaViewProps) => (
  <SafeAreaView {...props} style={[{ flex: 1 }, style]} />
);

export const Row = ({ style, ...props }: ViewProps) => (
  <View {...props} style={[{ flexDirection: 'row', alignItems: 'center' }, style]} />
);

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

export const DismissKeyboard = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

// -------------------------------------------------

interface BlankProps {
  height?: number;
  width?: number;
  style?: ViewStyleProps;
}
export const Blank = ({ height, width, style }: BlankProps) => (
  <View style={[{ height, width }, style]} />
);

export const Separator = ({ style, ...props }: ViewProps) => (
  <View {...props} style={[{ height: 20, backgroundColor: palette.gray1 }, style]} />
);
