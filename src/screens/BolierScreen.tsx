import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '@emotion/native';
import { RootParamList } from '@types';
import { AButton } from '@components';

interface Props {
  route: {
    name: string;
  };
}

export const BolierScreen = ({ route: { name } }: Props) => {
  const nav = useNavigation<NavigationProp<RootParamList>>();

  return (
    <SafeAreaView
      style={css`
        flex: 1;
        align-items: center;
        justify-content: center;
      `}
    >
      <Text>{name}</Text>
      <AButton kind="outline" disabled title="돌아가기" onPress={nav.goBack} />
      <AButton title="경고창" onPress={() => nav.navigate('Alert')} />
    </SafeAreaView>
  );
};
