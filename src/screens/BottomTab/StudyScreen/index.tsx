import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  HelpText,
  NavigateItem,
  ScreenTitle,
  Wrapper,
} from '@components';

export const StudyScreen = () => {
  const nav = useNavigation();

  const navBoiler = () => nav.navigate('Alert', { text: '개발 중에 있습니다.' });
  const navToAssignment = () => nav.navigate('Assignment');

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
          onPress={navBoiler}
        />
        <NavigateItem
          title="과제"
          iconTheme="green"
          iconName="check"
          onPress={navToAssignment}
        />
        <NavigateItem
          title="시험"
          iconTheme="yellow"
          iconName="test-color"
          onPress={navBoiler}
        />
        <NavigateItem
          title="보고서"
          iconTheme="red"
          iconName="report-color"
          onPress={navBoiler}
        />
      </Wrapper>
    </Container>
  );
};
