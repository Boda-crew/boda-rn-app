import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useCommentQuery } from '@hooks';
import { palette } from '@styles';
import { CommentDTO } from '@types';

import { AText, AView, HeaderTitle, Row } from '../atoms';
import { CommentItem, WriteCommentForm } from '../organisms';
import { KeyboardTextInput } from '../molecules';
interface Props {
  comments: CommentDTO[];
}

export const CommentLayout = ({ comments }: Props) => {
  const nav = useNavigation();
  const [editCommentTarget, setEditCommentTarget] = useState<CommentDTO>();

  const { createCommentMutation, editCommentMutation, deleteCommentMutation } =
    useCommentQuery();

  const navToCommentDetail = (comment: CommentDTO) =>
    nav.navigate('CommentDetail', { comment });

  const onSubmitCreate = (content: string) => {
    const postId = comments[0].postId;
    createCommentMutation.mutate({ postId, content });
  };

  const onPressDelete = (comment: CommentDTO) => {
    nav.navigate('Confirm', {
      text: '해당 댓글을 삭제하시겠습니까?',
      isDanger: true,
      onConfirm: () => deleteCommentMutation.mutate(comment),
    });
  };

  const onSubmitEdit = (content: string) => {
    if (!editCommentTarget) return;

    editCommentMutation.mutate({
      commentId: editCommentTarget.id,
      content,
      postId: editCommentTarget.postId,
    });
  };

  return (
    <AView pv="s08">
      <Row ph="s06">
        <HeaderTitle>
          댓글
          <AText pcolor={'primary'}> {comments.length}</AText>
        </HeaderTitle>
      </Row>

      <WriteCommentForm
        title="익명 댓글 쓰기"
        onSubmit={onSubmitCreate}
        mt="s07"
        mh="s06"
      />

      <AView mt="s04">
        {comments.map((comment, idx) => (
          <CommentItem
            key={idx}
            comment={comment}
            onPressEdit={() => setEditCommentTarget(comment)}
            onPressReply={() => navToCommentDetail(comment)}
            onPressDelete={() => onPressDelete(comment)}
            pv="s06"
            mh="s06"
            style={{
              borderTopWidth: idx ? 1 : 0,
              borderColor: palette.gray1,
            }}
          />
        ))}
      </AView>

      <KeyboardTextInput
        open={!!editCommentTarget}
        initText={editCommentTarget?.content}
        onClose={() => setEditCommentTarget(undefined)}
        onSubmit={onSubmitEdit}
      />
    </AView>
  );
};
