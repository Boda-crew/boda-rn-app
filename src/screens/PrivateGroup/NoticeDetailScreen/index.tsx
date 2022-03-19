import React from 'react';
import { useRoute } from '@react-navigation/native';

import { AScrollView, CommentLayout, Separator } from '@components';
import { PrivateRouteProps } from '@types';
import { NoticeInfo } from './NoticeInfo';
import { usePostQuery } from '@hooks';

export const NoticeDetailScreen = () => {
  const { params } = useRoute<PrivateRouteProps<'NoticeDetail'>>();

  const {
    post: notice,
    commentList,
    isCommentLoading,
    isPostLoading,
    onRefreshPost,
  } = usePostQuery(params.noticeId);

  return (
    <AScrollView
      refreshing={isPostLoading || isCommentLoading}
      onRefresh={onRefreshPost}
    >
      <NoticeInfo notice={notice} />
      <Separator />
      <CommentLayout
        isLoading={isCommentLoading}
        post={notice}
        commentList={commentList}
      />
    </AScrollView>
  );
};
