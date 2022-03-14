import { CommentDTO, CommentRequestDTO, LikeCommentDTO, ReCommentDTO } from '@types';
import { _axios } from '../AxiosService';

export const create_comment = (postId: number, data: CommentRequestDTO) => {
  return _axios<CommentDTO>({
    url: `/posts/${postId}/comments`,
    method: 'POST',
    data,
  });
};

export const create_recomment = (commentId: number, data: CommentRequestDTO) => {
  return _axios<CommentDTO>({
    url: `/posts/${commentId}/comments`,
    method: 'POST',
    data,
  });
};

export const like_comment = (data: LikeCommentDTO) => {
  return _axios<CommentDTO[]>({
    url: `/good/comment`,
    method: 'POST',
    data,
  });
};

export const read_all_comments = () => {
  return _axios<CommentDTO[]>({
    url: `/comments`,
    method: 'GET',
  });
};

export const read_recomments_by_comment_id = (commentId: number) => {
  return _axios<ReCommentDTO[]>({
    url: `/comments/${commentId}/re-comments`,
    method: 'GET',
  });
};

export const read_comments_by_post_id = (postId: number) => {
  return _axios<CommentDTO[]>({
    url: `/posts/${postId}/comments`,
    method: 'GET',
  });
};

export const update_comment = (
  postId: number,
  commentId: number,
  data: CommentRequestDTO,
) => {
  return _axios<CommentDTO[]>({
    url: `/posts/${postId}/comments/${commentId}`,
    method: 'PUT',
    data,
  });
};

export const delete_comment = (postsId: number, commentId: number) => {
  return _axios<CommentDTO[]>({
    url: `/posts/${postsId}/comments/${commentId}`,
    method: 'DELETE',
  });
};
