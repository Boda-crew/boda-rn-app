import {
  AButton,
  ATextInput,
  Container,
  DismissKeyboard,
  Wrapper,
} from '@components';
import { useAuthActions } from '@stores';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

export const LoginScreen = () => {
  const { login } = useAuthActions();
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<{ id: string; pw: string }>();

  const onSubmit = handleSubmit(login);

  return (
    <DismissKeyboard>
      <Container>
        <Wrapper m="s05" childStyle={{ mt: 's05' }}>
          <Controller
            control={control}
            name="id"
            rules={{ required: true }}
            render={({ field }) => (
              <ATextInput
                {...field}
                label="아이디"
                error={errors.id?.type === 'required' && '아이디를 입력해주세요'}
                onSubmitEditing={() => setFocus('pw')}
              />
            )}
          />

          <View>
            <Controller
              control={control}
              name="pw"
              rules={{ required: true }}
              render={({ field }) => (
                <ATextInput
                  {...field}
                  label="비밀번호"
                  error={errors.pw?.type === 'required' && '비밀번호를 입력해주세요'}
                  onSubmitEditing={onSubmit}
                />
              )}
            />
          </View>

          <AButton title="로그인" onPress={onSubmit} />
        </Wrapper>
      </Container>
    </DismissKeyboard>
  );
};
