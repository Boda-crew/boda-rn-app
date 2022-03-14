import React, { useState } from 'react';
import {
  AScrollView,
  AText,
  AView,
  Comment,
  CommentItem,
  HeaderTitle,
  KeyboardTextInput,
  WriteCommentForm,
} from '@components';
import { palette } from '@styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CommentDTO, PrivateRouteProps, ReCommentDTO } from '@types';
import { useRecommentListStore } from '@stores';
import { useRecommentQuery } from '@hooks';

export const CommentDetailScreen = () => {
  const nav = useNavigation();
  const {
    params: { comment },
  } = useRoute<PrivateRouteProps<'CommentDetail'>>();

  const [editRecommentTarget, setEditRecommentTarget] = useState<ReCommentDTO>();
  const { recommentList, isLoading, refetch } = useRecommentListStore(comment.id);
  const { createRecommentMutation, deleteRecommentMutation, editRecommentMutation } =
    useRecommentQuery();

  const onSubmitCreate = (content: string) => {
    createRecommentMutation.mutate({
      commentId: comment.id,
      content,
    });
  };

  const onSubmitEdit = (content: string) => {
    if (!editRecommentTarget) return;

    editRecommentMutation.mutate({
      commentId: editRecommentTarget.commentId,
      recommentId: editRecommentTarget.id,
      content,
    });
  };

  const onConfirmDelete = (recomment: ReCommentDTO) => {
    nav.navigate('Confirm', {
      isDanger: true,
      text: '정말 답글을 삭제하시겠습니까?',
      onConfirm: () => deleteRecommentMutation.mutate(recomment),
    });
  };

  return (
    <AScrollView refreshing={isLoading} onRefresh={refetch}>
      <AView p="s06">
        <HeaderTitle weight="700">
          답글 <AText pcolor="primary">{recommentList.length}</AText>
        </HeaderTitle>
      </AView>

      <AView p="s06" bc="gray0">
        <CommentItem comment={comment} />
      </AView>

      <WriteCommentForm
        title="익명 답글 쓰기"
        onSubmit={onSubmitCreate}
        mt="s07"
        mh="s06"
      />

      {[...recommentList].map((recomment, i) => (
        <Comment
          key={i}
          comment={recomment as unknown as CommentDTO}
          onPressDelete={() => onConfirmDelete(recomment)}
          onPressEdit={() => setEditRecommentTarget(recomment)}
          pv="s06"
          mh="s06"
          style={{
            borderTopColor: palette.gray1,
            borderTopWidth: i ? 1 : 0,
          }}
        />
      ))}

      <KeyboardTextInput
        open={!!editRecommentTarget}
        initText={editRecommentTarget?.content}
        onClose={() => setEditRecommentTarget(undefined)}
        onSubmit={onSubmitEdit}
      />
    </AScrollView>
  );
};
