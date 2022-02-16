import React from 'react';
import {
  AScrollView,
  AText,
  AView,
  Comment,
  CommentItem,
  Container,
  HeaderTitle,
} from '@components';
import { palette } from '@styles';

export const CommentDetailScreen = () => {
  return (
    <Container>
      <AScrollView>
        <AView p="s06">
          <HeaderTitle weight="700">
            답글 <AText pcolor="primary">{3}</AText>
          </HeaderTitle>
        </AView>

        <AView p="s06" bc="gray0">
          <CommentItem />
        </AView>

        {[...new Array(10)].map((v, i) => (
          <Comment
            key={i}
            pv="s06"
            mh="s06"
            style={{
              borderTopColor: palette.gray1,
              borderTopWidth: i ? 1 : 0,
            }}
          />
        ))}
      </AScrollView>
    </Container>
  );
};
