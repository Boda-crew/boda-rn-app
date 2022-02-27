import { useQuery } from 'react-query';
import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import { API } from '@services';
import { PostDTO } from '@types';

const noticeListState = atom<PostDTO[]>({
  key: 'noticeListAtom',
  default: [],
});

interface ShatteredNotices {
  [key: string]: PostDTO[];
}

const shatteredNoticesState = selector<ShatteredNotices>({
  key: 'shatteredNoticesState',
  get: ({ get }) => {
    const noticeList = get(noticeListState);

    return noticeList.reduce<ShatteredNotices>(
      (result, notice) => {
        const classrooms = notice.classrooms;
        if (!classrooms || !classrooms.length) return result;

        const academyName = classrooms[0].academy.name;
        if (!academyName) return result;
        result['전체'].push(notice);

        if (!result[academyName]) {
          result[academyName] = [];
        }

        result[academyName].push(notice);
        return { ...result };
      },
      { 전체: [] },
    );
  },
});

export const useNoticeListState = () => {
  const setNoticeList = useSetRecoilState(noticeListState);
  const shatteredNotices = useRecoilValue(shatteredNoticesState);

  const { isLoading, refetch } = useQuery('read_all_posts', API.read_all_posts, {
    onSuccess: ({ data }) =>
      setNoticeList(
        data
          .filter(v => v.type === '공지')
          .sort(
            (a, b) =>
              new Date(b.createdDateTime).getTime() -
              new Date(a.createdDateTime).getTime(),
          ),
      ),
  });

  return {
    shatteredNotices,
    isLoading,
    refetch,
  };
};
