import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Badge,
  BadgeTheme,
  Container,
  HeaderTitle,
  HelpText,
  HightlightListItem,
  IconName,
  ScreenTitle,
  Wrapper,
} from '@components';
import { ViewStyleProps } from '@types';

interface Props {}

export const StudyScreen = (props: Props) => {
  const nav = useNavigation();

  const navToClasses = () => nav.navigate('Confirm', { isDanger: true });

  return (
    <Container>
      <ScreenTitle mt="s06" ml="s06">
        학습
      </ScreenTitle>

      <HelpText mt="s05" ml="s06">
        자녀의 학습 정보를 한 곳에서 확인하세요
      </HelpText>

      <Wrapper mt="s10" childStyle={{ pv: 's05', ph: 's06' }}>
        <NavigateItem
          title="모든 반"
          iconTheme="blue"
          iconName="class"
          onPress={navToClasses}
        />
        <NavigateItem
          title="과제"
          iconTheme="green"
          iconName="check"
          onPress={navToClasses}
        />
        <NavigateItem
          title="시험"
          iconTheme="yellow"
          iconName="test-color"
          onPress={navToClasses}
        />
        <NavigateItem
          title="보고서"
          iconTheme="red"
          iconName="report-color"
          onPress={navToClasses}
        />
      </Wrapper>
    </Container>
  );
};

interface NavigateItemProps {
  title: string;
  iconTheme?: BadgeTheme;
  iconName: IconName;
  style?: ViewStyleProps;
  onPress: () => void;
}

const NavigateItem = ({
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
