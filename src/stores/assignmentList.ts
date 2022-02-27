import { useQuery } from 'react-query';
import { atom, useRecoilState } from 'recoil';
import { API } from '@services';
import { PostDTO } from '@types';

const assignmentListState = atom<PostDTO[]>({
  key: 'assignmentListState',
  default: [],
});

export const useAssignmentListState = () => {
  const [assignmentList, setAssignmentList] = useRecoilState(assignmentListState);

  const { isLoading, refetch } = useQuery('read_all_posts', API.read_all_posts, {
    onSuccess: ({ data }) =>
      setAssignmentList(
        data
          .filter(v => v.type === '과제')
          .sort(
            (a, b) =>
              new Date(b.createdDateTime).getTime() -
              new Date(a.createdDateTime).getTime(),
          ),
      ),
  });

  return {
    assignmentList,
    isLoading,
    refetch,
  };
};
