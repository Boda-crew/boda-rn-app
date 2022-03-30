import { useQuery } from 'react-query';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { API, StorageService } from '@services';
import { CommentDTO } from '@types';
import { sortCreatedDateTimeByNewest } from '@utils';

export const commentListStore = atom<CommentDTO[]>({
  key: 'commentListStore',
  default: [],
});

export const blockedCommentIdListStore = atom<number[]>({
  key: 'blockedCommentIdListStore',
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

export const useBootBlockedCommentIdList = () => {
  const setBlockedCommentIdList = useSetRecoilState(blockedCommentIdListStore);

  return {
    boostBlockedCommentIdList: async () => {
      const list = await StorageService.getItemAsync('blockedCommentList');
      if (list) setBlockedCommentIdList(list);
    },
  };
};

export const useBloackedCommentIdList = () => {
  const [blockedCommentIdList, setBlockedCommentIdList] = useRecoilState(
    blockedCommentIdListStore,
  );

  return {
    blockedCommentIdList,
    toggleBlockedComment: async (commentId: number) => {
      const isBlocked = blockedCommentIdList.includes(commentId);
      const newList = isBlocked
        ? blockedCommentIdList.filter(v => commentId !== v)
        : [...blockedCommentIdList, commentId];

      setBlockedCommentIdList(newList);
      await StorageService.setItemAsync('blockedCommentList', newList);
    },
  };
};
