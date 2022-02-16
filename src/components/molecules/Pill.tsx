import React from 'react';
import { View } from 'react-native';
import { palette, PaletteColor, SpaceProps } from '@styles';
import { AText, AView } from '../atoms';

interface PillTextProps extends SpaceProps {
  title: string;
  color?: PaletteColor;
  backgroundColor?: PaletteColor;
}

export const Pill = ({
  title,
  color = 'black',
  backgroundColor = 'gray1',
  ...props
}: PillTextProps) => {
  return (
    <AView {...props} style={[{ flexDirection: 'row' }, props.style]}>
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
    </AView>
  );
};
