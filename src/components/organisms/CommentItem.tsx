import { useNavigation } from '@react-navigation/native';
import { ViewStyleProps } from '@types';
import React from 'react';
import { View } from 'react-native';
import { Wrapper } from '../atoms';
import { Comment, ReplyButton, LikeButton } from '../molecules';

interface Props {
  style?: ViewStyleProps;
  onPressReply?: () => void;
}

export const CommentItem = ({ style, onPressReply }: Props) => {
  return (
    <View style={style}>
      <Comment />
      <Wrapper
        style={{ marginTop: 16, flexDirection: 'row' }}
        gapStyle={{ marginLeft: 8 }}
      >
        <LikeButton selected={true} rated={10} onPress={() => console.log('like')} />
        <ReplyButton cnt={3} onPress={onPressReply} />
      </Wrapper>
    </View>
  );
};
