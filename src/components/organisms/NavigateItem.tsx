import React from 'react';
import { ViewStyleProps } from '@types';
import { Badge, BadgeTheme, HightlightListItem } from '../molecules';
import { HeaderTitle, IconName } from '../atoms';

interface NavigateItemProps {
  title: string;
  iconTheme?: BadgeTheme;
  iconName: IconName;
  style?: ViewStyleProps;
  onPress: () => void;
}

export const NavigateItem = ({
  title,
  iconTheme,
  iconName,
  onPress,
  ...props
}: NavigateItemProps) => {
  return (
    <HightlightListItem hasArrow onPress={onPress} {...props}>
      <Badge theme={iconTheme} isCircle iconName={iconName} size="small" />
      <HeaderTitle ml="s06">{title}</HeaderTitle>
    </HightlightListItem>
  );
};
