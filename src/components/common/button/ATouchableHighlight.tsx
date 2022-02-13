import { palette } from '@styles';
import React from 'react';
import { TouchableHighlightProps, TouchableHighlight } from 'react-native';

interface Props extends TouchableHighlightProps {
  center?: boolean;
}

export const ATouchableHighlight = ({
  center,
  underlayColor,
  children,
  ...props
}: Props) => {
  return (
    <TouchableHighlight
      {...props}
      underlayColor={underlayColor || palette.gray1}
      style={[
        {
          backgroundColor: palette.background,
          borderColor: palette.border,
        },
        center && {
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.disabled && { opacity: 0.3 },
        props.style,
      ]}
    >
      <>{children}</>
    </TouchableHighlight>
  );
};
