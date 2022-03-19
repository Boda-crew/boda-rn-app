import React from 'react';
import { useRoute } from '@react-navigation/native';
import { AScrollView, CommentLayout, Separator } from '@components';
import { PrivateRouteProps } from '@types';
import { usePostQuery } from '@hooks';
import { AssignmentInfo } from './AssignmentInfo';

export const AssignmentDetailScreen = () => {
  const { params } = useRoute<PrivateRouteProps<'AssignmentDetail'>>();

  const {
    post: assignment,
    commentList,
    isPostLoading,
    isCommentLoading,
    onRefreshPost,
  } = usePostQuery(params.assignmentId);

  return (
    <AScrollView
      refreshing={isPostLoading || isCommentLoading}
      onRefresh={onRefreshPost}
    >
      <AssignmentInfo assignment={assignment} />
      <Separator />
      <CommentLayout
        isLoading={isCommentLoading}
        post={assignment}
        commentList={commentList}
      />
    </AScrollView>
  );
};
