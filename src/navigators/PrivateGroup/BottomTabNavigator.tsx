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
          elevation: 0, // for android
        },
        tabBarIcon: ({ focused, color }) => (
          <Icon name={iconName[name][focused ? 0 : 1]} color={color} />
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
    <BlurView blurType="light" blurAmount={20} style={StyleSheet.absoluteFill} />
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

const iconName: { [key in keyof BottomTabParamList]: [IconName, IconName] } = {
  Notice: ['announcement', 'announcement-outline'],
  Study: ['report', 'report-outline'],
  Notification: ['alert', 'alert-outline'],
  Account: ['person', 'person-outline'],
};
