import React, { useMemo, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import { getSpaceStyle, palette, SpaceProps } from '@styles';
import { ViewStyleProps } from '@types';
import { AText } from './AText';

interface ATextInputProps extends Omit<TextInputProps, 'onChange'>, SpaceProps {
  label?: string;
  error?: string | boolean;
  style?: ViewStyleProps;
  inputStyle?: StyleProp<TextStyle>;
  onChange: (value: string) => void;
}

export const ATextInput = React.forwardRef<TextInput, ATextInputProps>(
  ({ label, error, style, inputStyle, onChange, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    const color = useMemo(() => {
      if (error) return palette.notification;
      if (isFocus) return palette.primary;
      return undefined;
    }, [error, isFocus]);

    return (
      <View style={getSpaceStyle(props)}>
        {!!label && (
          <AText weight="700" style={styles.label}>
            {label}
          </AText>
        )}
        <View style={[{ borderColor: color ?? 'transparent' }, styles.inputWrapper]}>
          <TextInput
            ref={ref}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={palette.gray4}
            selectionColor={color}
            onChangeText={onChange}
            {...props}
            style={[styles.input, inputStyle]}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
        </View>
        {!!error && (
          <AText pcolor="notification" style={styles.errorText}>
            {error}
          </AText>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  label: {
    marginLeft: 4,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: palette.card,
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 0,
    margin: 8,
    marginRight: 16,
    backgroundColor: 'transparent',
  },
  errorText: {
    marginLeft: 4,
    marginTop: 4,
  },
});
