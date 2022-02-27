import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

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
    NoticeDetail: { notice: PostDTO };
    CommentDetail: { comment: CommentDTO };
    Setting: undefined;
  };

  type BottomTabParamList = {
    Notice: undefined;
    Study: undefined;
    Notification: undefined;
    Account: undefined;
  };

  type ModalPararmList = {
    Alert?: {
      text?: string;
      confirmText?: string;
      onConfirm?: () => void;
    };
    Confirm?: {
      text?: string;
      cancelText?: string;
      confirmText?: string;
      isDanger?: boolean;
      onConfirm?: () => void;
    };
  };

  /**
   * route
   */
  type PublicRouteProps<RouteName extends keyof PublicParamList> = RouteProp<
    PublicParamList,
    RouteName
  >;

  type PrivateRouteProps<RouteName extends keyof PrivateParamList> = RouteProp<
    PrivateParamList,
    RouteName
  >;

  type ModalRouteProps<RouteName extends keyof ModalPararmList> = RouteProp<
    ModalPararmList,
    RouteName
  >;
}
