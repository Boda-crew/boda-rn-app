import { useQuery } from 'react-query';
import { atom, useRecoilState } from 'recoil';
import { API } from '@services';
import { NotificationDTO } from '@types';
import { useAuth } from './auth';

export const notificationListStore = atom<NotificationDTO[]>({
  key: 'notificationListStore',
  default: [],
});

export const useNotificationListStore = () => {
  const [notificationList, set] = useRecoilState(notificationListStore);
  const { auth } = useAuth();

  const { isLoading, refetch } = useQuery(
    ['read_notifications_by_userId'],
    () => API.read_notifications_by_userId(auth!.id),
    {
      onSuccess: ({ data }) => set(data),
    },
  );

  return { notificationList, isLoading, refetch };
};
