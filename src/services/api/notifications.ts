import { NotificationDTO } from '@types';
import { _axios } from '../AxiosService';

export const read_notifications_by_userId = (userId: number) => {
  return _axios<NotificationDTO[]>({
    url: `/notification/${userId}`,
    method: 'GET',
  });
};
