import { useMutation, useQueryClient } from 'react-query';
import { API } from '@services';
import { useAuth } from '@stores';
import { CommentDTO } from '@types';

export const useCommentQuery = () => {
  const { auth } = useAuth();
  const queryClient = useQueryClient();

  const refreshCommentList = (postId: number) => {
    queryClient.invalidateQueries(['read_comments_by_post_id', postId]);
  };
  const refreshComment = ({
    postId,
    commentId,
  }: {
    postId: number;
    commentId: number;
  }) => {
    queryClient.invalidateQueries(['read_comment_by_comment_id', postId, commentId]);
  };

  const createCommentMutation = useMutation(
    async ({ postId, content }: { postId: number; content: string }) => {
      if (!auth) throw Error('잘못된 인증');

      await API.create_comment(postId, { author: auth.id, content });
      return postId;
    },
    {
      onSuccess: refreshCommentList,
    },
  );

  const editCommentMutation = useMutation(
    async ({
      postId,
      commentId,
      content,
    }: {
      postId: number;
      commentId: number;
      content: string;
    }) => {
      if (!auth) throw Error('잘못된 인증');

      await API.update_comment(postId, commentId, { author: auth.id, content });
      return { postId, commentId };
    },
    {
      onSuccess: ({ postId, commentId }) => {
        refreshCommentList(postId);
        refreshComment({ postId, commentId });
      },
    },
  );

  const deleteCommentMutation = useMutation(
    async ({
      comment,
      onSuccess,
    }: {
      comment: CommentDTO;
      onSuccess?: () => void;
    }) => {
      await API.delete_comment(comment.postId, comment.id);
      return { postId: comment.postId, onSuccess };
    },
    {
      onSuccess: ({ postId, onSuccess }) => {
        refreshCommentList(postId);
        onSuccess?.();
      },
    },
  );

  const likeCommentMutation = useMutation(
    async (comment: CommentDTO) => {
      if (!auth) throw Error('잘못된 인증');

      await API.like_comment({ userId: auth.id, commentId: comment.id });
      return { postId: comment.postId, commentId: comment.id };
    },
    {
      onSuccess: ({ postId, commentId }) => {
        refreshCommentList(postId);
        refreshComment({ postId, commentId });
      },
    },
  );

  return {
    createCommentMutation,
    editCommentMutation,
    deleteCommentMutation,
    likeCommentMutation,
  };
};
