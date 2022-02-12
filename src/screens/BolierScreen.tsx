import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AButton, Wrapper } from '@components';
import { css } from '@emotion/native';
import FastImage from 'react-native-fast-image';

interface Props {
  route: {
    name: string;
  };
}

export const BolierScreen = ({ route: { name } }: Props) => {
  const nav = useNavigation();

  return (
    <SafeAreaView>
      <Wrapper
        style={{ alignItems: 'center' }}
        gapStyle={{ marginTop: 8, justifyContent: 'center' }}
      >
        <Text>{name}</Text>
        <AButton kind="outline" disabled title="돌아가기" onPress={nav.goBack} />
        <AButton
          title="경고창"
          onPress={() => nav.navigate('Alert', { text: '정말 확인 하시겠습니까?' })}
        />

        <FastImage
          style={{ width: 200, height: 200 }}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Wrapper>
    </SafeAreaView>
  );
};
