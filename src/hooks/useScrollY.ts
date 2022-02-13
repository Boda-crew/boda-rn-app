import { useCallback, useRef } from 'react';
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

export const useScrollY = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const onScrollY = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { y } = e.nativeEvent.contentOffset;
    scrollY.setValue(y);
  }, []);

  return { scrollY, onScrollY };
};
