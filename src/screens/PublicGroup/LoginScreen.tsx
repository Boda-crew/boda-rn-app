import { AButton, ATextInput, Container, DismissKeyboard } from '@atoms';
import React from 'react';
import { View } from 'react-native';

const LoginScreen = () => {
  return (
    <DismissKeyboard>
      <Container>
        <View style={{ margin: 16 }}>
          <ATextInput label="입력" />

          <AButton title="알림" />
        </View>
      </Container>
    </DismissKeyboard>
  );
};

export default LoginScreen;
