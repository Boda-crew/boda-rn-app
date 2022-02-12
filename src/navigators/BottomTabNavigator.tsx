import React from 'react';
import { TouchableOpacity } from 'react-native';
import { BolierScreen } from '@screens';
import { BottomTabParamList } from '@types';
import { Ionicons } from '@components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { onHaptic } from '@utils';

const ButtomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <ButtomTab.Navigator
      screenOptions={({ route: { name } }) => ({
        title: tabName[name],
        tabBarButton: props => (
          <TouchableOpacity
            {...props}
            activeOpacity={0.8}
            onPress={e => {
              onHaptic();
              props.onPress?.(e);
            }}
          />
        ),
        tabBarIcon: ({ focused, color }) => (
          <Ionicons name={iconName[name][focused ? 0 : 1]} color={color} size={24} />
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
  About: '내 정보',
};

const iconName: { [key in keyof BottomTabParamList]: [string, string] } = {
  Landing: ['rocket', 'rocket-outline'],
  About: ['person', 'person-outline'],
};
