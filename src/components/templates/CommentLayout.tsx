import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useCommentQuery } from '@hooks';
import { palette } from '@styles';
import { CommentDTO, PostDTO } from '@types';

import { AText, AView, HeaderTitle, Row } from '../atoms';
import { CommentItem, WriteCommentForm } from '../organisms';
import { KeyboardTextInput } from '../molecules';
import { Switch } from 'react-native';
interface Props {
  isLoading?: boolean;
  post: PostDTO;
  commentList: CommentDTO[];
}

export const CommentLayout = ({ isLoading, post, commentList }: Props) => {
  const nav = useNavigation();
  const [editCommentTarget, setEditCommentTarget] = useState<CommentDTO>();

  const {
    createCommentMutation,
    editCommentMutation,
    deleteCommentMutation,
    likeCommentMutation,
  } = useCommentQuery();

  const navToCommentDetail = (comment: CommentDTO) =>
    nav.navigate('CommentDetail', { comment });

  const onSubmitCreate = (content: string) => {
    createCommentMutation.mutate({ postId: post.id, content });
  };

  const onPressDelete = (comment: CommentDTO) => {
    nav.navigate('Confirm', {
      text: '해당 댓글을 삭제하시겠습니까?',
      isDanger: true,
      onConfirm: () => deleteCommentMutation.mutate({ comment }),
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

  const onToggleLike = (comment: CommentDTO) => {
    likeCommentMutation.mutate(comment);
  };

  return (
    <AView pv="s08">
      <Row ph="s06">
        <HeaderTitle>
          댓글
          <AText pcolor={'primary'}> {commentList.length}</AText>
        </HeaderTitle>
      </Row>

      <WriteCommentForm
        title="익명 댓글 쓰기"
        onSubmit={onSubmitCreate}
        mt="s07"
        mh="s06"
      />

      <AView mt="s04">
        {isLoading ? (
          <AText>로딩중...</AText>
        ) : (
          commentList.map((comment, idx) => {
            const isClassTeacher = post.classrooms.some(
              classroom => classroom.teacher.id === comment.author.id,
            );
            return (
              <CommentItem
                key={idx}
                comment={comment}
                commentType="댓글"
                isClassTeacher={isClassTeacher}
                onPressEdit={() => setEditCommentTarget(comment)}
                onPressReply={() => navToCommentDetail(comment)}
                onPressDelete={() => onPressDelete(comment)}
                onPressLike={() => onToggleLike(comment)}
                pv="s06"
                mh="s06"
                style={{
                  borderTopWidth: idx ? 1 : 0,
                  borderColor: palette.gray1,
                }}
              />
            );
          })
        )}
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
