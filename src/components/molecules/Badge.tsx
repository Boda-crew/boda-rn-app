import React from 'react';
import { View } from 'react-native';
import { css } from '@emotion/native';
import { palette } from '@styles';
import { ViewStyleProps } from '@types';
import { AText, Icon, IconName } from '../atoms';

interface Props {
  theme?: BadgeTheme;
  size?: BadgeSize;
  iconName?: IconName;
  iconSize?: { width: number; height: number };
  title?: string;
  isCircle?: boolean;
  style?: ViewStyleProps;
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
    <View
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
    </View>
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
  medium: {
    background: css`
      width: 88px;
      height: 88px;
      border-radius: 24px;
    `,
    title: css`
      font-size: 20px;
    `,
  },
  small: {
    background: css`
      width: 64px;
      height: 64px;
      border-radius: 18px;
    `,
    title: css`
      font-size: 16px;
    `,
  },
};
