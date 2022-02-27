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

  const navToClasses = () =>
    nav.navigate('Confirm', {
      isDanger: true,
      text: '계좌를 불러오려면 본인인증을 \n진행해주세요',
    });

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
