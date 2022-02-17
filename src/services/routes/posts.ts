import { PostDTO } from '@types';
import { _axios } from '../AxiosService';

const route = '/posts';
const classroomRoute = '/classrooms';

export const read_all_posts = () => {
  return _axios<PostDTO[]>({
    url: `${route}`,
    method: 'GET',
  });
};

export const read_post_by_id = (postId: number) => {
  return _axios<PostDTO>({
    url: `${route}/${postId}`,
    method: 'GET',
  });
};

export const read_notices_by_classroom_id = (classroomId: number) => {
  return _axios<PostDTO[]>({
    url: `${classroomRoute}/${classroomId}/posts/notices`,
    method: 'GET',
  });
};

export const read_assignments_by_classroom_id = (classroomId: number) => {
  return _axios<PostDTO[]>({
    url: `${classroomRoute}/${classroomId}/posts/assignment`,
    method: 'GET',
  });
};
