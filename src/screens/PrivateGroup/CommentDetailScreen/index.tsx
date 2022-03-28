import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import { CommentDTO, PrivateRouteProps, ReCommentDTO } from '@types';
import { useCommentQuery, useRecommentQuery } from '@hooks';
import { API } from '@services';

export const CommentDetailScreen = () => {
  const { params } = useRoute<PrivateRouteProps<'CommentDetail'>>();

  const [comment, setComment] = useState(params.comment);
  const [editComment, setEditComment] = useState(false);
  const [editRecommentTarget, setEditRecommentTarget] = useState<ReCommentDTO>();

  useEffect(() => setComment(params.comment), [params]);

  const { isLoading, refetch } = useQuery(
    ['read_comment_by_comment_id', comment.postId, comment.id],
    () => API.read_comment_by_comment_id(comment.postId, comment.id),
    {
      onSuccess: ({ data }) => {
        setComment(data);
      },
    },
  );

  const { onConfirmDeleteComment, onLikeComment, onSubmitEditComment } =
    useCommentAction(comment);

  const {
    onConfirmDeleteRecomment,
    onSubmitCreateRecomment,
    onSubmitEditRecomment,
  } = useRecommentAction({ commentId: comment.id, editRecommentTarget });

  return (
    <AScrollView refreshing={isLoading} onRefresh={refetch}>
      <AView p="s06">
        <HeaderTitle weight="700">
          답글 <AText pcolor="primary">{comment.reComments.length}</AText>
        </HeaderTitle>
      </AView>

      <AView p="s06" bc="gray0">
        <CommentItem
          comment={comment}
          commentType="댓글"
          onPressDelete={onConfirmDeleteComment}
          onPressLike={onLikeComment}
          onPressEdit={() => setEditComment(true)}
        />
        <KeyboardTextInput
          open={editComment}
          initText={comment.content}
          onClose={() => setEditComment(false)}
          onSubmit={onSubmitEditComment}
        />
      </AView>

      <WriteCommentForm
        title="익명 답글 쓰기"
        onSubmit={onSubmitCreateRecomment}
        mt="s07"
        mh="s06"
      />

      {[...comment.reComments].map((recomment, i) => (
        <Comment
          key={i}
          comment={recomment as unknown as CommentDTO}
          commentType="대댓글"
          onPressDelete={() => onConfirmDeleteRecomment(recomment)}
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
        onSubmit={onSubmitEditRecomment}
      />
    </AScrollView>
  );
};

const useCommentAction = (comment: CommentDTO) => {
  const nav = useNavigation();
  const { deleteCommentMutation, editCommentMutation, likeCommentMutation } =
    useCommentQuery();

  return {
    onSubmitEditComment: (content: string) => {
      editCommentMutation.mutate({
        commentId: comment.id,
        postId: comment.postId,
        content,
      });
    },
    onConfirmDeleteComment: () => {
      nav.navigate('Confirm', {
        isDanger: true,
        text: '정말 댓글을 삭제하시겠습니까?',
        onConfirm: () => deleteCommentMutation.mutate(comment),
      });
    },
    onLikeComment: () => {
      likeCommentMutation.mutate(comment);
    },
  };
};

const useRecommentAction = ({
  commentId,
  editRecommentTarget,
}: {
  commentId: number;
  editRecommentTarget?: ReCommentDTO;
}) => {
  const nav = useNavigation();
  const { createRecommentMutation, deleteRecommentMutation, editRecommentMutation } =
    useRecommentQuery();

  return {
    onSubmitCreateRecomment: (content: string) => {
      createRecommentMutation.mutate({
        commentId,
        content,
      });
    },
    onSubmitEditRecomment: (content: string) => {
      if (!editRecommentTarget) return;

      editRecommentMutation.mutate({
        commentId: editRecommentTarget.commentId,
        recommentId: editRecommentTarget.id,
        content,
      });
    },
    onConfirmDeleteRecomment: (recomment: ReCommentDTO) => {
      nav.navigate('Confirm', {
        isDanger: true,
        text: '정말 답글을 삭제하시겠습니까?',
        onConfirm: () => deleteRecommentMutation.mutate(recomment),
      });
    },
  };
};
