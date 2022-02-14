import React from 'react';
import { palette } from '@styles';
import { ViewStyleProps } from '@types';
import { ATouchableOpacity, Icon } from '../atoms';

interface ListItemProps {
  hasArrow?: boolean;
  style?: ViewStyleProps;
  children: JSX.Element | JSX.Element[];
  onPress?: () => void;
}

export const OpacityListItem = ({
  children,
  hasArrow,
  style,
  ...props
}: ListItemProps) => (
  <ATouchableOpacity {...props} style={[{ flexDirection: 'row' }, style]}>
    {children}
    {hasArrow && (
      <Icon
        name="arrow-right"
        color={palette.gray2}
        style={{ marginLeft: 'auto' }}
      />
    )}
  </ATouchableOpacity>
);
