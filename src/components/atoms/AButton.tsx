import React from 'react';
import { Pressable, PressableProps, StyleSheet, View } from 'react-native';
import { getSpaceStyle, palette, PaletteColor, SpaceProps } from '@styles';
import { AText } from './AText';

interface ButtonProps extends Omit<PressableProps, 'style'>, SpaceProps {
  title: string;
  loading?: boolean;
  kind?: ButtonKind;
  size?: ButtonSize;
  color?: PaletteColor;
  backgroundColor?: PaletteColor;
  noBorderRadius?: boolean;
}

/**
 * 기본 View로 Background를 채우고 TouchableOpacity로 감싸인 기본 버튼
 * @kind
 * @size
 * @loading 로딩중이면 disable되며 spinner가 돌아가게 된다.
 * @default titleSize 16, weight 'bold', height 48,
 * @containerStyle
 */
export const AButton = ({
  title,
  loading,
  kind = 'primary',
  size = 'medium',
  color,
  backgroundColor,
  noBorderRadius,
  ...props
}: ButtonProps) => {
  const disabled = props.disabled || loading;

  return (
    <Pressable {...props} style={getSpaceStyle(props)} disabled={disabled}>
      {({ pressed }) => {
        return (
          <View
            style={{
              paddingHorizontal: 8,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              ...kinds[kind].wrapper,
              ...sizes[size].wrapper,
              ...(backgroundColor && { backgroundColor: palette[backgroundColor] }),
              ...(!noBorderRadius && { borderRadius: 8 }),
              opacity: disabled ? 0.7 : pressed ? 0.9 : 1,
            }}
          >
            <AText
              weight="700"
              style={{
                ...kinds[kind].title,
                ...sizes[size].title,
                opacity: disabled ? 0.7 : pressed ? 0.6 : 1,
                ...(color && { color: palette[color] }),
              }}
            >
              {loading ? '로딩중...' : title}
            </AText>
          </View>
        );
      }}
    </Pressable>
  );
};

export type ButtonKind = keyof typeof kinds;
const kinds = {
  primary: StyleSheet.create({
    wrapper: { backgroundColor: palette.blue3 },
    title: { color: palette.white },
  }),
  secondary: StyleSheet.create({
    wrapper: { backgroundColor: palette.gray2 },
    title: { color: palette.gray4 },
  }),
  outline: StyleSheet.create({
    wrapper: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: palette.blue3,
    },
    title: {
      color: palette.blue3,
    },
  }),
  ghost: StyleSheet.create({
    wrapper: { backgroundColor: 'transparent' },
    title: { color: palette.blue3 },
  }),
  danger: StyleSheet.create({
    wrapper: { backgroundColor: palette.red3 },
    title: { color: palette.white },
  }),
};

export type ButtonSize = keyof typeof sizes;
const sizes = {
  small: StyleSheet.create({
    wrapper: { height: 32, borderRadius: 12 },
    title: { fontSize: 14 },
  }),
  medium: StyleSheet.create({
    wrapper: { height: 48 },
    title: { fontSize: 16 },
  }),
  large: StyleSheet.create({
    wrapper: { height: 56 },
    title: { fontSize: 18 },
  }),
};
