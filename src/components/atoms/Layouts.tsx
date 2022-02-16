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
import { getSpaceStyle, palette, SpaceProps } from '@styles';
import { AView, AViewProps } from './AView';

// -------------------------------------------------

const { height, width } = Dimensions.get('window');
export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;

// -------------------------------------------------

export const Container = (props: SafeAreaViewProps & SpaceProps) => (
  <SafeAreaView {...props} style={[{ flex: 1 }, getSpaceStyle(props)]} />
);

export const Row = ({ style, ...props }: AViewProps) => (
  <AView
    {...props}
    style={[{ flexDirection: 'row', alignItems: 'center' }, style]}
  />
);

interface WrapperProps extends AViewProps {
  gapStyle?: ViewStyleProps & SpaceProps;
}

export const Wrapper = ({ gapStyle, children, ...props }: WrapperProps) => (
  <AView {...props}>
    {React.Children.map(children, (child, index) => {
      const element = child as any;
      if (!element) return;

      return React.cloneElement(element, {
        style: [element.props.style, gapStyle && index && getSpaceStyle(gapStyle)],
      });
    })}
  </AView>
);

export const DismissKeyboard = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

// -------------------------------------------------

interface BlankProps extends SpaceProps {
  height?: number;
  width?: number;
}
export const Blank = ({ height, width, ...props }: BlankProps) => (
  <View style={[{ height, width }, getSpaceStyle(props)]} />
);

export const Separator = (props: ViewProps & SpaceProps) => (
  <View
    {...props}
    style={[{ height: 20, backgroundColor: palette.gray1 }, getSpaceStyle(props)]}
  />
);
