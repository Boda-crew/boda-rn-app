import { getSpaceStyle, palette, SpaceProps } from '@styles';
import React from 'react';
import { TouchableHighlightProps, TouchableHighlight } from 'react-native';

export type ATouchableHighlightProps = Omit<TouchableHighlightProps, 'style'> &
  SpaceProps & {
    center?: boolean;
  };

/**
 * @underlayColor palette.gray1
 */
export const ATouchableHighlight = ({
  center,
  children,
  ...props
}: ATouchableHighlightProps) => {
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
        getSpaceStyle(props),
      ]}
    >
      <>{children}</>
    </TouchableHighlight>
  );
};
