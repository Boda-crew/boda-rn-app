import onFetch from '../onFetch';

const route = '/users';

export const read_users = () => {
  return onFetch<{
    name: string;
  }>({
    url: `${route}`,
    method: 'GET',
  });
};
