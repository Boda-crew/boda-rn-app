import { API } from '@services';
import { useAuth } from '@stores';
import { CommentDTO } from '@types';
import { useMutation, useQueryClient } from 'react-query';

export const useCommentQuery = () => {
  const { auth } = useAuth();
  const queryClient = useQueryClient();

  const refreshCommentList = (postId: number) => {
    queryClient.invalidateQueries(['read_comments_by_post_id', postId]);
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
      return postId;
    },
    {
      onSuccess: refreshCommentList,
    },
  );

  const deleteCommentMutation = useMutation(
    async (comment: CommentDTO) => {
      await API.delete_comment(comment.postId, comment.id);
      return comment.postId;
    },
    {
      onSuccess: refreshCommentList,
    },
  );

  return {
    createCommentMutation,
    editCommentMutation,
    deleteCommentMutation,
  };
};
