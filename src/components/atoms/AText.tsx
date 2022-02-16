import React from 'react';
import { Text, TextProps } from 'react-native';
import { getSpaceStyle, palette, PaletteColor, SpaceProps } from '@styles';

export interface ATextProps extends TextProps, Omit<SpaceProps, 'style'> {
  size?: number;
  color?: string;
  pcolor?: PaletteColor;
  weight?: '400' | '500' | '700';
  isCenter?: boolean;
  isUnderline?: boolean;
}

export const AText = ({
  size = 16,
  weight = '400',
  color = 'black',
  pcolor,
  isCenter,
  isUnderline,
  ...props
}: ATextProps) => (
  <Text
    {...props}
    style={[
      {
        fontSize: size,
        fontWeight: weight,
        lineHeight: size + 6,
        color: pcolor ? palette[pcolor] : color,
        ...(isCenter && { alignSelf: 'center', textAlign: 'center' }),
        ...(isUnderline && { textDecorationLine: 'underline' }),
      },
      ...getSpaceStyle(props),
    ]}
  />
);
