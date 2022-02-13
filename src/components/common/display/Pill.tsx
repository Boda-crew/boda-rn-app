import React from 'react';
import { View } from 'react-native';
import { AText } from './AText';
import { ViewStyleProps } from '@types';
import { palette, PaletteColor } from '@styles';

interface PillTextProps {
  title: string;
  color?: PaletteColor;
  backgroundColor?: PaletteColor;
  style?: ViewStyleProps;
}

export const Pill = ({
  title,
  color = 'black',
  backgroundColor = 'gray1',
  style,
}: PillTextProps) => {
  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      <View
        style={{
          backgroundColor: palette[backgroundColor],
          borderRadius: 10,
          paddingTop: 6,
          paddingBottom: 5,
          paddingHorizontal: 8,
        }}
      >
        <AText pcolor={color} weight="700" size={13}>
          {title}
        </AText>
      </View>
    </View>
  );
};
