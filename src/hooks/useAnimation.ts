import { StackCardInterpolationProps } from '@react-navigation/stack';
import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

// for navigator --------------------------

export const forStackFade = ({ current, next }: StackCardInterpolationProps) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    cardStyle: { opacity },
  };
};

// for component --------------------------

/**
 * `mount`: opacity + scale up
 *
 * `unmount`: opacity
 *
 *  반드시 함수 호출 후 `.start()`를 해주길 바란다!!
 */
export const useAlertAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1.1)).current;

  const opacityAnimation = (value: number) =>
    Animated.timing(opacity, {
      toValue: value,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    });

  /**
   * on mount
   */
  const onAppear = () =>
    Animated.parallel([
      opacityAnimation(1),
      Animated.timing(scale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ]);

  /**
   * on unmount
   */
  const onDisapper = () => opacityAnimation(0);

  return {
    animationStyle: { opacity, transform: [{ scale }] },
    onAppear,
    onDisapper,
  };
};

/** */
export const useSlideUpAnimation = () => {
  const INIT_Y_POSITION = 500;
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(INIT_Y_POSITION)).current;

  const opacityAnimation = (value: number) =>
    Animated.timing(opacity, {
      toValue: value,
      duration: 150,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    });

  const translateYAnimation = (value: number) =>
    Animated.timing(translateY, {
      toValue: value,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    });

  /**
   * on mount
   */
  const onAppear = () =>
    Animated.parallel([opacityAnimation(1), translateYAnimation(0)]);

  /**
   * on unmount
   */
  const onDisapper = () =>
    Animated.parallel([opacityAnimation(0), translateYAnimation(INIT_Y_POSITION)]);

  return {
    animationStyle: { opacity, transform: [{ translateY }] },
    onAppear,
    onDisapper,
  };
};
