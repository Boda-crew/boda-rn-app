import { palette } from '@styles';
import React from 'react';
import { TouchableHighlightProps, TouchableHighlight } from 'react-native';

interface Props extends TouchableHighlightProps {
  center?: boolean;
}

/**
 * @underlayColor palette.gray1
 */
export const ATouchableHighlight = ({ center, children, ...props }: Props) => {
  return (
    <TouchableHighlight
      underlayColor={palette.gray1}
      {...props}
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
