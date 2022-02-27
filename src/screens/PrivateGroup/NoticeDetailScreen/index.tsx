import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useRoute } from '@react-navigation/native';

import { AScrollView, CommentLayout, Container, Separator } from '@components';
import { PrivateRouteProps } from '@types';
import { useCommentListStore } from '@stores';
import { API } from '@services';
import { NoticeInfo } from './NoticeInfo';

export const NoticeDetailScreen = () => {
  const queryClient = useQueryClient();
  const { params } = useRoute<PrivateRouteProps<'NoticeDetail'>>();
  const [notice, setNotice] = useState(params.notice);
  const { commentList, isLoading } = useCommentListStore(notice.id);

  useQuery(['read_post_by_id', notice.id], () => API.read_post_by_id(notice.id), {
    onSuccess: ({ data }) => setNotice(data),
  });

  useEffect(() => setNotice(params.notice), [params]);

  const onRefreshNotice = () => {
    queryClient.invalidateQueries(['read_post_by_id', notice.id]);
    queryClient.invalidateQueries(['read_comments_by_post_id', notice.id]);
  };

  return (
    <AScrollView refreshing={isLoading} onRefresh={onRefreshNotice}>
      <NoticeInfo notice={notice} />
      <Separator />
      <CommentLayout comments={commentList} />
    </AScrollView>
  );
};
