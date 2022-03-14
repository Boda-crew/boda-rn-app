import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { API } from '@services';
import { useCommentListStore } from '@stores';
import { PostDTO } from '@types';

export const usePostQuery = (props: { post: PostDTO }) => {
  const queryClient = useQueryClient();
  const [post, setPost] = useState(props.post);
  const { commentList, isLoading } = useCommentListStore(post.id);

  useQuery(['read_post_by_id', post.id], () => API.read_post_by_id(post.id), {
    onSuccess: ({ data }) => setPost(data),
  });

  useEffect(() => setPost(props.post), [props]);

  const onRefreshPost = () => {
    queryClient.invalidateQueries(['read_post_by_id', post.id]);
    queryClient.invalidateQueries(['read_comments_by_post_id', post.id]);
  };

  return {
    post,
    commentList,
    isLoading,
    onRefreshPost,
  };
};
