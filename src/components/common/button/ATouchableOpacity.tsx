import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const ATouchableOpacity = (props: TouchableOpacityProps) => {
  return <TouchableOpacity activeOpacity={0.6} {...props} />;
};
