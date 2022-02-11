import { useAlertAnimation } from '@hooks';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Animated, Button, Text, View } from 'react-native';

export const AlertScreen = () => {
  const nav = useNavigation();

  const { onAppear, animationStyle } = useAlertAnimation();

  useEffect(() => {
    onAppear().start();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={[
          animationStyle,
          { backgroundColor: 'white', padding: 24, borderRadius: 8 },
        ]}
      >
        <Text style={{ fontSize: 14 }}>This is a modal!</Text>
        <Button title="Dismiss" onPress={() => nav.goBack()} />
      </Animated.View>
    </View>
  );
};
