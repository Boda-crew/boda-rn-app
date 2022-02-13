import React from 'react';
import styled from '@emotion/native';
import { palette } from '@styles';
import { ViewStyleProps } from '@types';
import { Icon } from '../display/Icons';

interface ListItemProps {
  hasArrow?: boolean;
  style?: ViewStyleProps;
  children: JSX.Element | JSX.Element[];
  onPress?: () => void;
}

export const ListItem = ({ children, hasArrow, ...props }: ListItemProps) => (
  <Touchable activeOpacity={0.7} {...props}>
    {children}
    {hasArrow && (
      <Icon
        name="arrow-right"
        color={palette.gray2}
        style={{ marginLeft: 'auto' }}
      />
    )}
  </Touchable>
);

const Touchable = styled.TouchableOpacity({
  flexDirection: 'row',
});
