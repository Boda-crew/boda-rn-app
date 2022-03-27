import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { palette } from '@styles';
import { createStackNavigator } from '@react-navigation/stack';
import { RootParamList } from '@types';
import { HeaderLeftBackButton, HeaderLeftCloseButton } from '@components';

export const Root = createStackNavigator<RootParamList>();

export const headerOptions: StackNavigationOptions = {
  headerShown: true,
  headerTitle: '',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 16,
    color: palette.primary,
  },
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: palette.background,
    shadowOpacity: 0, // for ios
    elevation: 0, // for android
  },
  headerLeft: HeaderLeftBackButton,
};

export const verticalInterOption: StackNavigationOptions = {
  headerLeft: HeaderLeftCloseButton,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
};

export const horizontalInterOption: StackNavigationOptions = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
