import React from 'react';
import { BolierScreen } from '@screens';
import { BottomTabParamList } from '@types';
import { Ionicons } from '@components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ButtomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <ButtomTab.Navigator
      screenOptions={({ route: { name } }) => ({
        title: tabName[name],
        tabBarIcon: ({ focused, color }) => (
          <Ionicons name={iconName[name][focused ? 0 : 1]} color={color} size={22} />
        ),
      })}
    >
      <ButtomTab.Screen name="Landing" component={BolierScreen} />
      <ButtomTab.Screen name="About" component={BolierScreen} />
    </ButtomTab.Navigator>
  );
};

export default BottomTabNavigator;

const tabName: { [key in keyof BottomTabParamList]: string } = {
  Landing: '랜딩페이지',
  About: 'About',
};

const iconName: { [key in keyof BottomTabParamList]: [string, string] } = {
  Landing: ['rocket', 'rocket-outline'],
  About: ['person', 'person-outline'],
};
