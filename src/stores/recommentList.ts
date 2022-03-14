import { useQuery } from 'react-query';
import { atom, useRecoilState } from 'recoil';
import { API } from '@services';
import { ReCommentDTO } from '@types';
import { compareTime } from '@utils';

export const recommentListStore = atom<ReCommentDTO[]>({
  key: 'recommentListStore',
  default: [],
});

export const useRecommentListQuery = (
  commentId: number,
  onSuccess: (data: ReCommentDTO[]) => void,
) => {
  return useQuery(
    ['read_recomments_by_comment_id', commentId],
    () => API.read_recomments_by_comment_id(commentId),
    {
      onSuccess: ({ data }) =>
        onSuccess(
          [...data].sort((a, b) =>
            compareTime(b.createdDateTime, a.createdDateTime),
          ),
        ),
    },
  );
};

export const useRecommentListStore = (commentId: number) => {
  const [recommentList, setRecommentList] = useRecoilState(recommentListStore);

  const { isLoading, refetch } = useRecommentListQuery(commentId, setRecommentList);

  return { recommentList, isLoading, refetch };
};
