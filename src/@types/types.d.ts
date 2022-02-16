import { StyleProp, ViewStyle } from 'react-native';

declare module '@types' {
  type ViewStyleProps = StyleProp<ViewStyle>;

  type MeasureType = {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}
