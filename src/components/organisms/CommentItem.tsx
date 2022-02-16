import { ViewStyleProps } from '@types';
import React from 'react';
import { AView, AViewProps, Wrapper } from '../atoms';
import { Comment, ReplyButton, LikeButton } from '../molecules';

interface Props extends AViewProps {
  style?: ViewStyleProps;
  onPressReply?: () => void;
}

export const CommentItem = ({ onPressReply, ...props }: Props) => {
  return (
    <AView {...props}>
      <Comment />
      <Wrapper mt="s05" gapStyle={{ ml: 's03' }} style={{ flexDirection: 'row' }}>
        <LikeButton selected={true} rated={10} onPress={() => console.log('like')} />
        <ReplyButton cnt={3} onPress={onPressReply} />
      </Wrapper>
    </AView>
  );
};
