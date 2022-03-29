import { ClassroomDTO } from '@types';
import { _axios } from '../AxiosService';

const route = '/classrooms';
const academyRoute = '/academies';

export const read_all_classrooms = () => {
  return _axios<ClassroomDTO[]>({
    url: `${route}`,
    method: 'GET',
  });
};

export const read_classroom_by_id = (classroomId: number) => {
  return _axios<ClassroomDTO>({
    url: `${route}/${classroomId}`,
    method: 'GET',
  });
};

export const read_classrooms_by_academy_id = (academiyId: number) => {
  return _axios<ClassroomDTO[]>({
    url: `${academyRoute}/${academiyId}/classrooms`,
    method: 'GET',
  });
};
