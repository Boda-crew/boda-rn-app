import { useQuery } from 'react-query';
import { atom, useRecoilState } from 'recoil';
import { API } from '@services';
import { CommentDTO } from '@types';

export const commentListStore = atom<CommentDTO[]>({
  key: 'commentListStore',
  default: [],
});

export const useCommentListQuery = (
  postId: number,
  onSuccess: (data: CommentDTO[]) => void,
) => {
  return useQuery(
    ['read_comments_by_post_id', postId],
    () => API.read_comments_by_post_id(postId),
    {
      onSuccess: ({ data }) => onSuccess(data),
    },
  );
};

export const useCommentListStore = (postId: number) => {
  const [commentList, setCommentList] = useRecoilState(commentListStore);

  const { isLoading, refetch } = useCommentListQuery(postId, setCommentList);

  return { commentList, isLoading, refetch };
};
