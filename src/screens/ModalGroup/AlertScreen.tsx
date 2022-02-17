import React, { useEffect, useMemo } from 'react';
import { Animated, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AButton, WINDOW_WIDTH } from '@components';
import { useAlertAnimation } from '@hooks';
import { ModalRouteProps } from '@types';

export const AlertScreen = () => {
  const nav = useNavigation();
  const { params: { text = '경고', confirmText = '확인', onConfirm } = {} } =
    useRoute<ModalRouteProps<'Alert'>>();

  const { animationStyle, onAppear } = useAlertAnimation();
  const width = useMemo(() => WINDOW_WIDTH / 1.618, [WINDOW_WIDTH]);

  useEffect(() => {
    onAppear().start();
  }, []);

  const onPress = () => {
    nav.goBack();
    onConfirm?.();
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={[
          animationStyle,
          { backgroundColor: 'white', borderRadius: 8, overflow: 'hidden' },
        ]}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            padding: 24,
            width,
          }}
        >
          {text}
        </Text>
        <AButton title={confirmText} onPress={onPress} noBorderRadius />
      </Animated.View>
    </View>
  );
};
