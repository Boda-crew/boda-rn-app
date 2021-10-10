import styled from '@emotion/native';
import React from 'react';
import { Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// -------------------------------------------------

const { height, width } = Dimensions.get('window');
export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;

// -------------------------------------------------

interface AView {
  children?: React.ReactNode;
}

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
