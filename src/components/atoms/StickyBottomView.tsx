import React from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  View,
} from 'react-native';

interface StickyBottomProps extends KeyboardAvoidingViewProps {
  box?: boolean;
  children: React.ReactNode;
}
export const StickyBottomView = ({ box = true, ...props }: StickyBottomProps) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'android' ? 'height' : 'position'}
    {...props}
    style={[
      {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 24 : 0,
        alignSelf: 'center',
        width: '100%',
      },
      props.style,
    ]}
  >
    <View
      style={[
        {
          paddingTop: 16,
          paddingBottom: 8,
        },
        box && { paddingHorizontal: 24 },
      ]}
    >
      {props.children}
    </View>
  </KeyboardAvoidingView>
);
