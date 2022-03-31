import { useQuery } from 'react-query';
import { atom, useRecoilState } from 'recoil';
import { API } from '@services';
import { CommentDTO } from '@types';
import { sortCreatedDateTimeByNewest } from '@utils';

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
      onSuccess: ({ data }) => {
        const sortedData = [...data].sort((a, b) => {
          if (a.goodUserIdList.length !== b.goodUserIdList.length)
            return b.goodUserIdList.length - a.goodUserIdList.length;

          return sortCreatedDateTimeByNewest(a, b);
        });
        onSuccess(sortedData);
      },
    },
  );
};

export const useCommentListStore = (postId: number) => {
  const [commentList, setCommentList] = useRecoilState(commentListStore);

  const { isLoading, refetch } = useCommentListQuery(postId, setCommentList);

  return { commentList, isLoading, refetch };
};
