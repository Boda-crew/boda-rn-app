import React from 'react';
import {
  AssignmentScreen,
  AssignmentDetailScreen,
  BolierScreen,
  CommentDetailScreen,
  NoticeDetailScreen,
  AssignmentTotalScreen,
} from '@screens';
import { headerOptions, horizontalInterOption, Root } from '../config';
import { BottomTabNavigator } from './BottomTabNavigator';

export const PrivateGroup = () => {
  return (
    <Root.Group screenOptions={{ ...headerOptions, ...horizontalInterOption }}>
      <Root.Screen
        name="HomeTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Root.Screen name="NoticeDetail" component={NoticeDetailScreen} />
      <Root.Screen name="CommentDetail" component={CommentDetailScreen} />

      <Root.Screen name="Assignment" component={AssignmentScreen} />
      <Root.Screen name="AssignmentTotal" component={AssignmentTotalScreen} />
      <Root.Screen name="AssignmentDetail" component={AssignmentDetailScreen} />

      <Root.Screen name="Setting" component={BolierScreen} />
    </Root.Group>
  );
};
