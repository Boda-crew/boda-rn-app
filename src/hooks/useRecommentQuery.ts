import { useMutation, useQueryClient } from 'react-query';
import { API } from '@services';
import { useAuth } from '@stores';
import { ReCommentDTO } from '@types';

export const useRecommentQuery = () => {
  const { auth } = useAuth();
  const queryClient = useQueryClient();

  const refreshRecommentList = (commentId: number) => {
    queryClient.invalidateQueries(['read_recomments_by_comment_id', commentId]);
  };

  const createRecommentMutation = useMutation(
    async ({ commentId, content }: { commentId: number; content: string }) => {
      if (!auth) throw Error('잘못된 인증');

      await API.create_recomment(commentId, { author: auth.id, content });
      return commentId;
    },
    {
      onSuccess: refreshRecommentList,
    },
  );

  const editRecommentMutation = useMutation(
    async ({
      commentId,
      recommentId,
      content,
    }: {
      commentId: number;
      recommentId: number;
      content: string;
    }) => {
      if (!auth) throw Error('잘못된 인증');

      await API.update_recomment(commentId, recommentId, {
        author: auth.id,
        content,
      });
      return commentId;
    },
    {
      onSuccess: refreshRecommentList,
    },
  );

  const deleteRecommentMutation = useMutation(
    async (recomment: ReCommentDTO) => {
      await API.delete_recomment(recomment.commentId, recomment.id);
      return recomment.commentId;
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
