import { AcademyDTO } from '@types';
import { _axios } from '../AxiosService';

const route = '/academies';

export const read_all_academies = () => {
  return _axios<AcademyDTO[]>({
    url: `${route}`,
    method: 'GET',
  });
};

export const read_academy_by_id = (academiyId: number) => {
  return _axios<AcademyDTO>({
    url: `${route}/${academiyId}`,
    method: 'GET',
  });
};
