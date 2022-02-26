import { CommentDTO, CommentRequestDTO } from '@types';
import { _axios } from '../AxiosService';

const route = '/comments';
const postRoute = '/posts';

export const create_comment = (postId: string, data: CommentRequestDTO) => {
  return _axios<CommentDTO>({
    url: `${postRoute}/${postId}/comments`,
    method: 'POST',
    data,
  });
};

export const read_all_comments = () => {
  return _axios<CommentDTO[]>({
    url: `${route}`,
    method: 'GET',
  });
};

export const read_comments_by_post_id = (postId: number) => {
  return _axios<CommentDTO[]>({
    url: `/posts/${postId}/comments`,
    method: 'GET',
  });
};

export const update_comment = (commentId: string, data: CommentRequestDTO) => {
  return _axios<CommentDTO[]>({
    url: `${route}/${commentId}`,
    method: 'PUT',
    data,
  });
};

export const delete_comment = (commentId: string) => {
  return _axios<CommentDTO[]>({
    url: `${route}/${commentId}`,
    method: 'DELETE',
  });
};
