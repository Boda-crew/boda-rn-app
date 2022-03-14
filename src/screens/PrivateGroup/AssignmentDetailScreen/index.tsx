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
    isLoading,
    onRefreshPost,
  } = usePostQuery({
    post: params.assignment,
  });

  return (
    <AScrollView refreshing={isLoading} onRefresh={onRefreshPost}>
      <AssignmentInfo assingment={assignment} />
      <Separator />
      <CommentLayout comments={commentList} />
    </AScrollView>
  );
};
