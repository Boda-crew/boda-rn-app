import React from 'react';
import {
  AssignmentScreen,
  AssignmentDetailScreen,
  BolierScreen,
  CommentDetailScreen,
  NoticeDetailScreen,
} from '@screens';
import { headerOptions, Root } from '../config';
import { BottomTabNavigator } from './BottomTabNavigator';

export const PrivateGroup = () => {
  return (
    <Root.Group screenOptions={{ ...headerOptions }}>
      <Root.Screen
        name="HomeTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Root.Screen name="NoticeDetail" component={NoticeDetailScreen} />
      <Root.Screen name="CommentDetail" component={CommentDetailScreen} />

      <Root.Screen name="Assignment" component={AssignmentScreen} />
      <Root.Screen name="AssignmentDetail" component={AssignmentDetailScreen} />

      <Root.Screen name="Setting" component={BolierScreen} />
    </Root.Group>
  );
};
