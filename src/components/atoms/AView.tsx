import React from 'react';
import { getSpaceStyle, palette, PaletteColor, SpaceProps } from '@styles';
import { View, ViewProps } from 'react-native';

export type AViewProps = SpaceProps &
  ViewProps & {
    bc?: PaletteColor;
  };

export const AView = ({ bc, ...props }: AViewProps) => (
  <View
    {...props}
    style={[{ ...(bc && { backgroundColor: palette[bc] }) }, getSpaceStyle(props)]}
  />
);
