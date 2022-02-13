import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';
import {
  BolierScreen,
  NoticeScreen,
  NotificationScreen,
  StudyScreen,
} from '@screens';
import { BottomTabParamList } from '@types';
import { Icon, IconName } from '@components';
import { onHaptic } from '@utils';
import { palette } from '@styles';

const ButtomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <ButtomTab.Navigator
      screenOptions={({ route: { name } }) => ({
        title: tabName[name],
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          position: 'absolute',
          borderTopColor: 'transparent',
          paddingTop: 4,
          elevation: 0, // for android
        },
        tabBarInactiveTintColor: palette.gray3,
        tabBarIcon: ({ focused, color }) => (
          <Icon name={iconName[name]} color={focused ? color : color + '90'} />
        ),
        tabBarButton: TabBarButton,
        tabBarBackground: TabBarBackground,
      })}
      safeAreaInsets={{ left: 24, right: 24 }}
    >
      <ButtomTab.Screen name="Notice" component={NoticeScreen} />
      <ButtomTab.Screen name="Study" component={StudyScreen} />
      <ButtomTab.Screen name="Notification" component={NotificationScreen} />
      <ButtomTab.Screen name="Account" component={BolierScreen} />
    </ButtomTab.Navigator>
  );
};

const TabBarBackground = () => {
  return (
    <BlurView
      blurType="light"
      blurAmount={20}
      style={[
        StyleSheet.absoluteFill,
        { borderColor: palette.gray1, borderRadius: 24, borderWidth: 1 },
      ]}
    />
  );
};

const TabBarButton = (props: BottomTabBarButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      onPress={e => {
        onHaptic();
        props.onPress?.(e);
      }}
    />
  );
};

const tabName: { [key in keyof BottomTabParamList]: string } = {
  Notice: '공지',
  Study: '학습',
  Notification: '알림',
  Account: '계정',
};

const iconName: { [key in keyof BottomTabParamList]: IconName } = {
  Notice: 'announcement',
  Study: 'report',
  Notification: 'alert',
  Account: 'person',
};
