import { FamilyDTO, FamilyRequestDTO } from '@types';
import { _axios } from '../AxiosService';

const route = '/families';

export const create_family = (data: FamilyRequestDTO) => {
  return _axios<void>({
    url: `${route}`,
    method: 'POST',
    data,
  });
};

export const read_all_families = () => {
  return _axios<FamilyDTO[]>({
    url: `${route}`,
    method: 'GET',
  });
};

export const read_families_by_id = (id: number) => {
  return _axios<FamilyDTO[]>({
    url: `/users/${id}${route}`,
    method: 'GET',
  });
};

export const delete_family = (data: FamilyRequestDTO) => {
  return _axios<void>({
    url: `${route}`,
    method: 'DELETE',
    data,
  });
};
