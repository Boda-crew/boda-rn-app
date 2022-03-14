import {
  AButton,
  ATextInput,
  Container,
  DismissKeyboard,
  ScreenTitle,
  StickyBottomView,
  Wrapper,
} from '@components';
import { useAuthActions } from '@stores';
import { filterPhoneInput, regex } from '@utils';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

export const LoginScreen = () => {
  const { login } = useAuthActions();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{ phone: string }>();

  const onSubmit = (e: React.SyntheticEvent) => {
    handleSubmit(login)(e).catch(() => {
      setError('phone', { message: '일치된 전화번호가 없습니다.' });
    });
  };

  return (
    <DismissKeyboard>
      <Container>
        <ScreenTitle mh="s06" mt="s08">
          편리한
        </ScreenTitle>
        <ScreenTitle mh="s06" mt="s03">
          학원 생활의 시작
        </ScreenTitle>

        <Wrapper mh="s06" mt="s12">
          <Controller
            control={control}
            name="phone"
            rules={{ required: true, pattern: regex.number }}
            render={({ field: { onChange, ...field } }) => (
              <ATextInput
                {...field}
                label="전화번호"
                autoFocus
                onChange={text => onChange(filterPhoneInput(text))}
                error={errors.phone?.message}
                onSubmitEditing={onSubmit}
                keyboardType="number-pad"
                maxLength={13}
                style={{ height: 60 }}
                inputStyle={{ fontSize: 22, height: 38 }}
              />
            )}
          />
        </Wrapper>

        <StickyBottomView>
          <AButton title="로그인" size="large" onPress={onSubmit} mt="auto" />
        </StickyBottomView>
      </Container>
    </DismissKeyboard>
  );
};
