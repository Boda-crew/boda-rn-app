import styled from '@emotion/native';
import { palette, theme } from '@styles';
import { ViewStyleProps } from '@types';
import React, { useCallback, useMemo, useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

interface ATextInputProps extends Omit<TextInputProps, 'onChange'> {
  label?: string;
  error?: string | boolean;
  containerStyle?: ViewStyleProps;
  onChange: (value: string) => void;
}

export const ATextInput = React.forwardRef<TextInput, ATextInputProps>(
  ({ label, error, onChange, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    const color = useMemo(() => {
      if (error) return theme.colors.notification;
      if (isFocus) return theme.colors.primary;
      return undefined;
    }, [error, isFocus]);

    return (
      <View>
        {!!label && <Label>{label}</Label>}
        <InputWrapper borderColor={color}>
          <Input
            ref={ref}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={palette.grey4}
            selectionColor={color}
            onChangeText={onChange}
            {...props}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
        </InputWrapper>
        {!!error && <ErrorLabel>{error}</ErrorLabel>}
      </View>
    );
  },
);

const Label = styled.Text`
  font-weight: bold;
  margin-left: 4px;
  margin-bottom: 8px;
`;

const InputWrapper = styled.View<{ borderColor?: string }>`
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${({ borderColor }) =>
    borderColor ? borderColor + '70' : 'transparent'};
  background-color: ${theme.colors.card};
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  margin: 8px 8px 8px 16px;
  background: transparent;
  padding: 0;
`;

const ErrorLabel = styled.Text`
  margin-left: 4px;
  margin-top: 4px;
  color: ${theme.colors.notification};
`;
