import {
  AButton,
  ATextInput,
  Container,
  DismissKeyboard,
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
    formState: { errors },
  } = useForm<{ phone: string }>();

  const onSubmit = handleSubmit(login);

  return (
    <DismissKeyboard>
      <Container>
        <Wrapper mh="s06" mt="s08">
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
                error={
                  errors.phone?.type === 'required' && '전화번호를 입력해주세요'
                }
                onSubmitEditing={onSubmit}
                keyboardType="number-pad"
                maxLength={13}
              />
            )}
          />
        </Wrapper>

        <StickyBottomView>
          <AButton title="로그인" onPress={onSubmit} mt="auto" />
        </StickyBottomView>
      </Container>
    </DismissKeyboard>
  );
};
