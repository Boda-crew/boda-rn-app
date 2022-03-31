import { StorageService } from '@services';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';

export const blockedUserIdListStore = atom<number[]>({
  key: 'blockedUserIdListStore',
  default: [],
});

export const useBootBlockedUserIdList = () => {
  const set = useSetRecoilState(blockedUserIdListStore);

  return {
    boostBlockedUserIdList: async () => {
      const list = await StorageService.getItemAsync('blockedUserIdList');
      if (list) set(list);
    },
  };
};

export const useBloackedUserIdList = () => {
  const [blockedUserIdList, setBlockedUserIdList] = useRecoilState(
    blockedUserIdListStore,
  );

  return {
    blockedUserIdList,
    toggleBlockedComment: async (userId: number) => {
      const isBlocked = blockedUserIdList.includes(userId);
      const newList = isBlocked
        ? blockedUserIdList.filter(v => userId !== v)
        : [...blockedUserIdList, userId];

      setBlockedUserIdList(newList);
      await StorageService.setItemAsync('blockedUserIdList', newList);
    },
  };
};
