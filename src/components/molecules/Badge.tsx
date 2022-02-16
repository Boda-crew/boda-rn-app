import React from 'react';
import { StyleSheet, View } from 'react-native';
import { palette } from '@styles';
import { ViewStyleProps } from '@types';
import { AText, AView, AViewProps, Icon, IconName } from '../atoms';

interface Props extends AViewProps {
  theme?: BadgeTheme;
  size?: BadgeSize;
  iconName?: IconName;
  iconSize?: { width: number; height: number };
  title?: string;
  isCircle?: boolean;
}

export const Badge = ({
  theme = 'default',
  size = 'medium',
  iconName,
  iconSize,
  title,
  isCircle,
  ...props
}: Props) => {
  const { backgroundColor, color } = themes[theme];

  return (
    <AView
      {...props}
      style={[
        sizes[size].background,
        { alignItems: 'center', justifyContent: 'center', backgroundColor },
        { ...(isCircle && { borderRadius: 50 }) },
        props.style,
      ]}
    >
      <View>
        {iconName && (
          <Icon
            name={iconName}
            color={color}
            width={iconSize?.width}
            height={iconSize?.height}
          />
        )}
        {title && (
          <AText
            color={color}
            weight="700"
            style={[sizes[size].title, { ...(iconName && { marginTop: 8 }) }]}
          >
            {title}
          </AText>
        )}
      </View>
    </AView>
  );
};

export type BadgeTheme = keyof typeof themes;
const themes = {
  default: { backgroundColor: palette.gray1, color: palette.gray4 },
  red: { backgroundColor: palette.red1, color: palette.red3 },
  primaryRed: { backgroundColor: palette.red3, color: palette.white },
  blue: { backgroundColor: palette.blue1, color: palette.blue3 },
  green: { backgroundColor: palette.green1, color: palette.green3 },
  yellow: { backgroundColor: palette.yellow1, color: palette.yellow3 },
};

export type BadgeSize = keyof typeof sizes;
const sizes = {
  medium: StyleSheet.create({
    background: {
      width: 88,
      height: 88,
      borderRadius: 24,
    },
    title: {
      fontSize: 20,
    },
  }),
  small: StyleSheet.create({
    background: {
      width: 64,
      height: 64,
      borderRadius: 18,
    },
    title: {
      fontSize: 16,
    },
  }),
};
