import {
  AButton,
  ATextInput,
  Container,
  DismissKeyboard,
  Wrapper,
} from '@components';
import React from 'react';

export const LoginScreen = () => {
  return (
    <DismissKeyboard>
      <Container>
        <Wrapper style={{ margin: 16 }} childStyle={{ marginTop: 8 }}>
          <ATextInput label="입력" />
          <AButton title="알림" style={{ marginTop: 16 }} />
        </Wrapper>
      </Container>
    </DismissKeyboard>
  );
};
