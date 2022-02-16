import { getSpaceStyle, SpaceProps } from '@styles';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const ATouchableOpacity = (props: TouchableOpacityProps & SpaceProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props} style={getSpaceStyle(props)} />
  );
};
