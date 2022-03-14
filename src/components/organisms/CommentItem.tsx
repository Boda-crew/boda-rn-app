import { useAuth } from '@stores';
import React, { useMemo } from 'react';
import { AView, Wrapper } from '../atoms';
import { Comment, CommentProps, ReplyButton, LikeButton } from '../molecules';

interface Props extends CommentProps {
  onPressLike?: () => void;
  onPressReply?: () => void;
}

export const CommentItem = ({
  comment,
  onPressEdit,
  onPressDelete,
  onPressLike,
  onPressReply,
  ...props
}: Props) => {
  const { auth } = useAuth();

  const commentProps: CommentProps = {
    comment,
    onPressEdit,
    onPressDelete,
  };

  const isSelected = useMemo(() => {
    return comment.goodUserIdList.some(id => id === auth?.id);
  }, [comment]);

  return (
    <AView {...props}>
      <Comment {...commentProps} />
      <Wrapper mt="s05" fd="row" ignoreFrist childStyle={{ ml: 's03' }}>
        <LikeButton
          selected={isSelected}
          rated={comment.goodUserIdList.length}
          onPress={onPressLike}
        />
        <ReplyButton cnt={comment.reComments.length} onPress={onPressReply} />
      </Wrapper>
    </AView>
  );
};
