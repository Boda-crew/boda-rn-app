import React from 'react';
import { Text, TextProps } from 'react-native';
import { getSpaceStyle, palette, PaletteColor, SpaceProps } from '@styles';
export interface ATextProps extends TextProps, Omit<SpaceProps, 'style'> {
  type?: '';
  size?: number;
  color?: string;
  pcolor?: PaletteColor;
  weight?: '400' | '500' | '700';
  isCenter?: boolean;
  isUnderline?: boolean;
}

export const AText = ({
  size,
  weight,
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
        color: pcolor ? palette[pcolor] : color,
        ...(weight && { fontWeight: weight }),
        ...(size && { fontSize: size, lineHeight: size + 6 }),
        ...(isCenter && { alignSelf: 'center', textAlign: 'center' }),
        ...(isUnderline && { textDecorationLine: 'underline' }),
      },
      ...getSpaceStyle(props),
    ]}
  />
);
