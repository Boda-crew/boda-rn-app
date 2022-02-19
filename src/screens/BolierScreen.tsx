import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { AButton, AImage, Container, Wrapper } from '@components';
import FastImage from 'react-native-fast-image';
import { useAuthActions } from '@stores';

interface Props {
  route: {
    name: string;
  };
}

export const BolierScreen = ({ route: { name } }: Props) => {
  const nav = useNavigation();
  const { logout } = useAuthActions();

  const random = Math.floor(Math.random() * 10);

  return (
    <Container>
      <Wrapper
        style={{ alignItems: 'center' }}
        childStyle={{ mt: 's03', justifyContent: 'center' }}
      >
        <Text>{name}</Text>
        <AButton kind="outline" title="로그아웃" onPress={logout} />
        <AButton
          title="경고창"
          onPress={() => nav.navigate('Alert', { text: '정말 확인 하시겠습니까?' })}
        />

        <AImage
          height={200}
          width={200}
          loadingURI={`https://unsplash.it/400/400?image=${random}`}
          source={{
            uri: `https://unsplash.it/400/400?image=${random}`,
            priority: FastImage.priority.normal,
          }}
        />
      </Wrapper>
    </Container>
  );
};
