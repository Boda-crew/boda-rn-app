import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import styled, { css } from '@emotion/native';
import { palette } from '@styles';

/**
 * TouchableOpacity의 기본 activeOpacity
 */

interface ContentProps {
  disabled?: boolean | null;
  pressed?: boolean;
  kind?: keyof typeof kinds;
  size?: keyof typeof sizes;
  color?: keyof typeof palette;
  backgroundColor?: keyof typeof palette;
}

interface ButtonProps extends PressableProps, ContentProps {
  title: string;
  loading?: boolean;
}

/**
 * 기본 View로 Background를 채우고 TouchableOpacity로 감싸인 기본 버튼
 * @kind
 * @size
 * @loading 로딩중이면 disable되며 spinner가 돌아가게 된다.
 * @default activeOpacity 0.6, titleSize 16, weight 'bold', height 56,
 * @containerStyle
 */
export const AButton = ({
  title,
  loading,
  kind,
  size,
  color,
  backgroundColor,
  ...props
}: ButtonProps) => {
  const disabled = props.disabled || loading;

  return (
    <Pressable {...props} disabled={disabled}>
      {({ pressed }) => {
        const contentProps = {
          disabled,
          pressed,
          kind,
          size,
          color,
          backgroundColor,
        };
        return (
          <Wrapper {...contentProps}>
            <Title {...contentProps}>{loading ? '로딩중...' : title}</Title>
          </Wrapper>
        );
      }}
    </Pressable>
  );
};

const Wrapper = styled.View<ContentProps>(
  {
    borderRadius: 8,
    paddingHorizontal: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({ pressed, disabled, kind = 'primary', size = 'nomal', backgroundColor }) => ({
    ...kinds[kind].wrapper,
    ...sizes[size].wrapper,
    ...(backgroundColor && { backgroundColor }),
    opacity: disabled ? 0.7 : pressed ? 0.9 : 1,
  }),
);

const Title = styled.Text<ContentProps>(
  ({ pressed, disabled, kind = 'primary', size = 'nomal', color }) => ({
    ...kinds[kind].title,
    ...sizes[size].title,
    ...(color && { color }),
    opacity: disabled ? 0.7 : pressed ? 0.6 : 1,
  }),
);

const kinds = {
  primary: {
    wrapper: css`
      background-color: ${palette.blue3};
    `,
    title: css`
      color: ${palette.white};
    `,
  },
  secondary: {
    wrapper: css`
      background-color: ${palette.grey2};
    `,
    title: css`
      color: ${palette.grey4};
    `,
  },
  outline: {
    wrapper: css`
      background-color: transparent;
      /* borderWidth: 1, */
      /* borderColor: palette.blue3, */
    `,
    title: css`
      color: ${palette.blue3};
    `,
  },
  ghost: {
    wrapper: css`
      background-color: transparent;
    `,
    title: css`
      color: ${palette.blue3};
    `,
  },
  danger: {
    wrapper: css`
      background-color: ${palette.red3};
    `,
    title: css`
      color: ${palette.white};
    `,
  },
};

const sizes = {
  small: {
    wrapper: css`
      height: 32px;
      border-radius: 12px;
    `,
    title: css`
      font-size: 14px;
    `,
  },
  nomal: {
    wrapper: css`
      height: 48px;
    `,
    title: css`
      font-size: 16px;
      font-weight: bold;
    `,
  },
  large: {
    wrapper: css`
      height: 56px;
    `,
    title: css`
      font-size: 18px;
      font-weight: 900;
    `,
  },
};
