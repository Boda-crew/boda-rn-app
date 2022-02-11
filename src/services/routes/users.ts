import { _axios } from '../AxiosService';

const route = '/users';

export const read_users = () => {
  return _axios<{ name: string }>({
    url: `${route}`,
    method: 'GET',
  });
};
