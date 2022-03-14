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
    classTeacherIdList,
    isLoading,
    onRefreshPost,
  } = usePostQuery({ post: params.notice });

  return (
    <AScrollView refreshing={isLoading} onRefresh={onRefreshPost}>
      <NoticeInfo notice={notice} />
      <Separator />
      <CommentLayout
        postId={notice.id}
        commentList={commentList}
        classTeacherIdList={classTeacherIdList}
      />
    </AScrollView>
  );
};
