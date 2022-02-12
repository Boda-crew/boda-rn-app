import { NavigatorScreenParams } from '@react-navigation/native';

declare module '@types' {
  /**
   * navigation
   */

  type RootParamList = PublicParamList & PrivateParamList & ModalPararmList;

  type PublicParamList = {
    Login: undefined;
  };

  type PrivateParamList = {
    HomeTab: NavigatorScreenParams<BottomTabParamList>;
    Setting: undefined;
  };

  type BottomTabParamList = {
    Landing: undefined;
    About: undefined;
  };

  type ModalPararmList = {
    Alert: undefined;
  };

  /**
   * route
   */
}
