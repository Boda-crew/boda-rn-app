import {
  StudentDTO,
  StudentRequestDTO,
  TeacherDTO,
  UserDTO,
  UserRequestDTO,
} from '@types';
import { _axios } from '../AxiosService';

const route = '/users';
const studentRoute = `${route}/students`;
const teacherRoute = `${route}/teachers`;

/**
 * users
 */

export const create_user = (data: UserRequestDTO) => {
  return _axios<void>({
    url: `${route}`,
    method: 'POST',
    data,
  });
};

export const read_all_users = () => {
  return _axios<UserDTO[]>({
    url: `${route}`,
    method: 'GET',
  });
};

export const read_user_by_id = (userId: number) => {
  return _axios<UserDTO>({
    url: `${route}/${userId}`,
    method: 'GET',
  });
};

export const update_user = (data: UserDTO) => {
  return _axios<void>({
    url: `${route}/${data.id}`,
    method: 'PUT',
    data,
  });
};

export const delete_user = (userId: number) => {
  return _axios<void>({
    url: `${route}/${userId}`,
    method: 'DELETE',
  });
};

/**
 * student
 */

export const create_student = (data: StudentRequestDTO) => {
  return _axios<void>({
    url: `${studentRoute}`,
    method: 'POST',
    data,
  });
};

export const read_all_students = () => {
  return _axios<StudentDTO[]>({
    url: `${studentRoute}`,
    method: 'GET',
  });
};

export const read_student_by_id = (id: number) => {
  return _axios<StudentDTO>({
    url: `${studentRoute}/${id}`,
    method: 'GET',
  });
};

export const update_student = (data: StudentRequestDTO) => {
  return _axios<void>({
    url: `${studentRoute}/${data.id}`,
    method: 'PUT',
    data,
  });
};

/**
 * teacher
 */

export const read_all_teachers = () => {
  return _axios<TeacherDTO[]>({
    url: `${teacherRoute}`,
    method: 'GET',
  });
};

export const read_teacher_by_id = (userId: number) => {
  return _axios<TeacherDTO>({
    url: `${teacherRoute}/${userId}`,
    method: 'GET',
  });
};

export const read_all_my_students_by_id = (userId: number) => {
  return _axios<StudentDTO[]>({
    url: `${teacherRoute}/${userId}/students`,
    method: 'GET',
  });
};

export const update_teacher = (data: TeacherDTO) => {
  return _axios<{}>({
    url: `${teacherRoute}/${data.id}`,
    method: 'PUT',
    data,
  });
};
