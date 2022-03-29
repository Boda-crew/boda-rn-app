import { useMutation, useQueryClient } from 'react-query';
import { API } from '@services';
import { useAuth } from '@stores';

export const useRecommentQuery = () => {
  const { auth } = useAuth();
  const queryClient = useQueryClient();

  const refreshRecommentList = ({
    commentId,
    postId,
  }: {
    commentId: number;
    postId: number;
  }) => {
    queryClient.invalidateQueries(['read_comment_by_comment_id', postId, commentId]);
  };

  const createRecommentMutation = useMutation(
    async ({
      commentId,
      postId,
      content,
    }: {
      commentId: number;
      postId: number;
      content: string;
    }) => {
      if (!auth) throw Error('잘못된 인증');

      await API.create_recomment(commentId, { author: auth.id, content });
      return { postId, commentId };
    },
    {
      onSuccess: refreshRecommentList,
    },
  );

  const editRecommentMutation = useMutation(
    async ({
      commentId,
      postId,
      recommentId,
      content,
    }: {
      commentId: number;
      postId: number;
      recommentId: number;
      content: string;
    }) => {
      if (!auth) throw Error('잘못된 인증');

      await API.update_recomment(commentId, recommentId, {
        author: auth.id,
        content,
      });
      return { postId, commentId };
    },
    {
      onSuccess: refreshRecommentList,
    },
  );

  const deleteRecommentMutation = useMutation(
    async ({
      commentId,
      postId,
      recommentId,
    }: {
      commentId: number;
      postId: number;
      recommentId: number;
    }) => {
      await API.delete_recomment(commentId, recommentId);
      return { postId, commentId };
    },
    {
      onSuccess: refreshRecommentList,
    },
  );

  return {
    createRecommentMutation,
    editRecommentMutation,
    deleteRecommentMutation,
  };
};
