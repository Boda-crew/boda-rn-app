import React from 'react';
import { AScrollView, CommentLayout, Container, Separator } from '@components';
import { NoticeInfo } from './NoticeInfo';

export const NoticeDetailScreen = () => {
  return (
    <Container>
      <AScrollView>
        <NoticeInfo />
        <Separator />
        <CommentLayout comments={[...new Array(10)]} />
      </AScrollView>
    </Container>
  );
};
