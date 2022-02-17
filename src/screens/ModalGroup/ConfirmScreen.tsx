import React, { useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AButton, AText, AView, Row, Wrapper } from '@components';
import { useAlertAnimation } from '@hooks';
import { palette, PaletteColor } from '@styles';
import { ModalRouteProps } from '@types';
import { onHaptic } from '@utils';

export const ConfirmScreen = () => {
  const {
    params: {
      text = '정말로 확인 하시겠습니까?',
      cancelText = '취소',
      confirmText = '확인',
      isDanger,
      onConfirm,
    } = {},
  } = useRoute<ModalRouteProps<'Confirm'>>();
  const nav = useNavigation();
  const color: PaletteColor = isDanger ? 'notification' : 'primary';

  const { animationStyle, onAppear, onDisapper } = useAlertAnimation();
  useEffect(onAppear().start, []);

  const onPressClose = () => {
    onDisapper().start(nav.goBack);
  };

  const onPressConfirm = () => {
    onDisapper().start(() => {
      nav.goBack();
      onHaptic('impactMedium');
      onConfirm?.();
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wrapper, animationStyle]}>
        <AView style={styles.textWrapper}>
          <AText size={16} weight="700">
            {text}
          </AText>
        </AView>

        <Wrapper fd="row" style={styles.buttonWrapper} childStyle={styles.button}>
          <AButton
            title={cancelText}
            kind="ghost"
            color={color}
            onPress={onPressClose}
          />
          <AButton
            title={confirmText}
            onPress={onPressConfirm}
            backgroundColor={color}
          />
        </Wrapper>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    marginHorizontal: 50,
    padding: 10,
    backgroundColor: palette.card,
    borderRadius: 8,
  },
  textWrapper: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    marginTop: 8,
  },
  button: {
    flex: 1,
  },
});
