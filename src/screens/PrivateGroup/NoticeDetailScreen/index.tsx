import React from 'react';
import { useRoute } from '@react-navigation/native';
import { AScrollView, CommentLayout, Container, Separator } from '@components';
import { PrivateRouteProps } from '@types';
import { useCommentListStore } from '@stores';
import { NoticeInfo } from './NoticeInfo';

export const NoticeDetailScreen = () => {
  const {
    params: { notice },
  } = useRoute<PrivateRouteProps<'NoticeDetail'>>();

  const { commentList } = useCommentListStore(notice.id);

  return (
    <Container>
      <AScrollView>
        <NoticeInfo notice={notice} />
        <Separator />
        <CommentLayout comments={commentList} />
      </AScrollView>
    </Container>
  );
};
