import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback';

export const onHaptic = (type: HapticFeedbackTypes = 'impactLight') => {
  ReactNativeHapticFeedback.trigger(type, {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  });
};

export const extract = <T>(
  target: T,
  properties: Partial<Record<keyof T, boolean>>,
) => {
  const result: Partial<T> = {};

  for (const key of Object.keys(target) as Array<keyof T>) {
    const value = properties[key];
    if (!value) {
      result[key] = target[key];
    }
  }

  return result;
};
