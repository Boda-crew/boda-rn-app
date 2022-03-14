import { useQuery } from 'react-query';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { API } from '@services';
import { PostDTO } from '@types';
import { sortCreatedDateTimeByNewest } from '@utils';

const assignmentListState = atom<PostDTO[]>({
  key: 'assignmentListState',
  default: [],
});
interface ShatteredAssignments {
  [key: string]: {
    [key: string]: PostDTO[];
  };
}

const shatteredAssignmentState = selector<ShatteredAssignments>({
  key: 'shatteredAssignmentState',
  get: ({ get }) => {
    const assignmentList = get(assignmentListState);

    return assignmentList.reduce<ShatteredAssignments>((result, assignment) => {
      const classrooms = assignment.classrooms;
      if (!classrooms || !classrooms.length) return result;

      const academyName = classrooms[0].academy.name;
      if (!academyName) return result;

      if (!result[academyName]) {
        result[academyName] = {};
      }

      classrooms.forEach(classroom => {
        const classroomName = classroom.name;
        if (!result[academyName][classroomName]) {
          result[academyName][classroomName] = [];
        }

        result[academyName][classroomName].push(assignment);
      });
      return { ...result };
    }, {});
  },
});

export const useAssignmentListState = () => {
  const [assignmentList, setAssignmentList] = useRecoilState(assignmentListState);
  const shatteredAssignments = useRecoilValue(shatteredAssignmentState);

  const { isLoading, refetch } = useQuery('read_all_posts', API.read_all_posts, {
    onSuccess: ({ data }) =>
      setAssignmentList(
        data.filter(v => v.type === '과제').sort(sortCreatedDateTimeByNewest),
      ),
  });

  return {
    assignmentList,
    shatteredAssignments,
    isLoading,
    refetch,
  };
};
