import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import { palette } from '@styles';
import { API } from '@services';
import { useAuth } from '@stores';
import { CommentDTO } from '@types';

import { AText, AView, HeaderTitle, Row } from '../atoms';
import { CommentItem, WriteCommentForm } from '../organisms';
import { KeyboardTextInput } from '../molecules';
interface Props {
  comments: CommentDTO[];
}

export const CommentLayout = ({ comments }: Props) => {
  const nav = useNavigation();
  const queryClient = useQueryClient();
  const { auth } = useAuth();
  const [editCommentTarget, setEditCommentTarget] = useState<CommentDTO>();

  const refreshCommentList = (postId: number) => {
    queryClient.invalidateQueries(['read_comments_by_post_id', postId]);
  };

  const editComment = useMutation(
    async (content: string) => {
      if (!auth || !editCommentTarget) throw Error('잘못된 타겟');

      await API.update_comment(editCommentTarget.postId, editCommentTarget.id, {
        author: auth.id,
        content,
      });
      return editCommentTarget.postId;
    },
    {
      onSuccess: refreshCommentList,
    },
  );

  const deleteComment = useMutation(
    async (comment: CommentDTO) => {
      await API.delete_comment(comment.postId, comment.id);
      return comment.postId;
    },
    {
      onSuccess: refreshCommentList,
    },
  );

  const navToCommentDetail = (comment: CommentDTO) =>
    nav.navigate('CommentDetail', { comment });

  const onPressDelete = (comment: CommentDTO) => {
    nav.navigate('Confirm', {
      text: '해당 댓글을 삭제하시겠습니까?',
      isDanger: true,
      onConfirm: () => deleteComment.mutate(comment),
    });
  };

  const onSubmitEdit = (text: string) => {
    editComment.mutate(text);
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
        onSubmit={e => console.log(e)}
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
