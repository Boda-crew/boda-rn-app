import React from 'react';
import {
  Container,
  HeaderTitle,
  HelpText,
  HightlightListItem,
  Icon,
  ScreenTitle,
  Wrapper,
} from '@components';
import { useNavigation } from '@react-navigation/native';

interface Props {}

export const StudyScreen = (props: Props) => {
  const nav = useNavigation();

  const navToClasses = () => nav.navigate('Alert', {});

  return (
    <Container>
      <ScreenTitle ml="s06">학습</ScreenTitle>

      <HelpText mt="s05" ml="s06">
        자녀의 학습 정보를 한 곳에서 확인하세요
      </HelpText>

      <Wrapper childStyle={{ pv: 's05', ph: 's06' }}>
        <HightlightListItem hasArrow onPress={navToClasses}>
          <Icon name="class" />
          <HeaderTitle ml="s06">모든 반</HeaderTitle>
        </HightlightListItem>
      </Wrapper>
    </Container>
  );
};
