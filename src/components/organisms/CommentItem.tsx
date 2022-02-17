import React from 'react';
import { AView, Wrapper } from '../atoms';
import { Comment, CommentProps, ReplyButton, LikeButton } from '../molecules';

interface Props extends CommentProps {
  onPressLike?: () => void;
  onPressReply?: () => void;
}

export const CommentItem = ({
  isAuther,
  onPressEdit,
  onPressDelete,
  onPressLike,
  onPressReply,
  ...props
}: Props) => {
  const commentProps: CommentProps = {
    isAuther,
    onPressEdit,
    onPressDelete,
  };

  return (
    <AView {...props}>
      <Comment {...commentProps} />
      <Wrapper mt="s05" fd="row" ignoreFrist childStyle={{ ml: 's03' }}>
        <LikeButton selected={true} rated={10} onPress={onPressLike} />
        <ReplyButton cnt={3} onPress={onPressReply} />
      </Wrapper>
    </AView>
  );
};
