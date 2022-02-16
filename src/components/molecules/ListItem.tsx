import React from 'react';
import { palette } from '@styles';
import { ATouchableOpacity, AViewProps, Icon } from '../atoms';

interface ListItemProps extends AViewProps {
  hasArrow?: boolean;
  children: JSX.Element | JSX.Element[];
  onPress?: () => void;
}

export const OpacityListItem = ({ children, hasArrow, ...props }: ListItemProps) => (
  <ATouchableOpacity {...props} style={[{ flexDirection: 'row' }, props.style]}>
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
