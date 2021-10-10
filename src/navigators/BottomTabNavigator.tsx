import React from 'react';
import BolierScreen from '@screens/BolierScreen';
import { BottomTabParamList } from '@types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ButtomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <ButtomTab.Navigator
      screenOptions={({ route: { name } }) => ({
        title: tabName[name],
        tabBarIcon: ({ focused, color }) => (
          <>
            {iconName[name][focused ? 1 : 0]} {color}
          </>
        ),
      })}
    >
      <ButtomTab.Screen name="Landing" component={BolierScreen} />
    </ButtomTab.Navigator>
  );
};

export default BottomTabNavigator;

const tabName: { [key in keyof BottomTabParamList]: string } = {
  Landing: '랜딩페이지',
};

const iconName: { [key in keyof BottomTabParamList]: [string, string] } = {
  Landing: ['defaultIcon', 'focusedIcon'],
};
