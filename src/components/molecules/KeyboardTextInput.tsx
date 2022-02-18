import { palette } from '@styles';
import { onHaptic } from '@utils';
import React, { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';
import { ATouchableOpacity, AView, Icon } from '../atoms';

interface Props {
  placeholder?: string;
  initText?: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
}

export const KeyboardTextInput = ({
  open,
  initText = '',
  onClose,
  ...props
}: Props) => {
  const inputRef = useRef<TextInput>(null);
  const [text, setText] = useState(initText);

  useEffect(() => setText(initText), [initText]);

  useEffect(() => {
    if (open && inputRef.current) {
      Platform.OS === 'ios'
        ? inputRef.current?.focus()
        : setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  const onSubmit = async () => {
    props.onSubmit(text);
    onHaptic('impactMedium');
    onClose();
    setText(initText);
  };

  return (
    <Modal visible={open} animationType="slide" transparent>
      <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />

      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <AView style={styles.inputWrapper}>
          <TextInput
            ref={inputRef}
            autoCapitalize="none"
            placeholder={props.placeholder}
            value={text}
            onChangeText={setText}
            multiline
            style={styles.input}
          />
          <ATouchableOpacity onPress={onSubmit} style={styles.iconButton}>
            <Icon name="submit" />
          </ATouchableOpacity>
        </AView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  inputWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: palette.border,
    paddingVertical: 8,
    paddingRight: 16,
    paddingLeft: 24,
  },
  input: {
    flex: 4,
    fontSize: 18,
    marginRight: 8,
  },
  iconButton: {
    marginTop: 'auto',
    borderRadius: 50,
    ...(Platform.OS === 'android' && { marginBottom: 6 }),
  },
});
