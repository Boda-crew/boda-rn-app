import React from 'react';
import { Container, NavigateItem, ScreenTitle, Wrapper } from '@components';
import { useAuthActions } from '@stores';
import { useNavigation } from '@react-navigation/native';

export const AccountScreen = () => {
  const nav = useNavigation();
  const { logout } = useAuthActions();

  return (
    <Container>
      <ScreenTitle mv="s06" ml="s06">
        계정
      </ScreenTitle>

      <Wrapper childStyle={{ pv: 's05', ph: 's06' }}>
        <NavigateItem
          title="내 정보"
          iconTheme="blue"
          iconName="person"
          onPress={() => nav.navigate('Confirm', { isDanger: Math.random() > 0.5 })}
        />
        <NavigateItem
          title="로그아웃"
          iconTheme="yellow"
          iconName="privacy-outline"
          onPress={logout}
        />
      </Wrapper>
    </Container>
  );
};
