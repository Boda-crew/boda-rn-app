import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { API } from '@services';
import { useCommentListStore } from '@stores';
import { PostDTO } from '@types';

const initPost: PostDTO = {
  id: 0,
  title: '로딩중...',
  author: {
    id: 0,
    certified: false,
    createdDateTime: '',
    updatedDateTime: '',
    name: '',
    phone: '',
    type: '관리자',
  },
  classrooms: [],
  createdDateTime: '',
  updatedDateTime: '',
  content: '',
  textbook: '',
  type: '',
};

export const usePostQuery = (postId: number) => {
  const queryClient = useQueryClient();
  const [post, setPost] = useState<PostDTO>(initPost);

  const { isLoading: isPostLoading, refetch: refetchPost } = useQuery(
    ['read_post_by_id', post.id],
    () => API.read_post_by_id(postId),
    {
      onSuccess: ({ data }) => setPost(data),
    },
  );

  const {
    commentList,
    isLoading: isCommentLoading,
    refetch: refetchCommentList,
  } = useCommentListStore(postId);
  const classTeacherIdList = post.classrooms.map(classroom => classroom.teacher.id);

  useEffect(() => {
    refetchCommentList();
    refetchPost();
  }, [postId]);

  const onRefreshPost = () => {
    queryClient.invalidateQueries(['read_post_by_id', post.id]);
    queryClient.invalidateQueries(['read_comments_by_post_id', post.id]);
  };

  return {
    post,
    classTeacherIdList,
    commentList,
    isPostLoading,
    isCommentLoading,
    onRefreshPost,
  };
};
