import React from 'react';
import {
  AScrollView,
  AText,
  AView,
  Comment,
  CommentItem,
  Container,
  HeaderTitle,
  WriteCommentForm,
} from '@components';
import { palette } from '@styles';
import { useRoute } from '@react-navigation/native';
import { PrivateRouteProps } from '@types';

export const CommentDetailScreen = () => {
  const {
    params: { comment },
  } = useRoute<PrivateRouteProps<'CommentDetail'>>();

  return (
    <Container>
      <AScrollView>
        <AView p="s06">
          <HeaderTitle weight="700">
            답글 <AText pcolor="primary">{3}</AText>
          </HeaderTitle>
        </AView>

        <AView p="s06" bc="gray0">
          <CommentItem comment={comment} />
        </AView>

        <WriteCommentForm
          title="익명 답글 쓰기"
          onSubmit={e => console.log(e)}
          mt="s07"
          mh="s06"
        />

        {/* {[...new Array(10)].map((v, i) => (
          <Comment
            key={i}
            pv="s06"
            mh="s06"
            style={{
              borderTopColor: palette.gray1,
              borderTopWidth: i ? 1 : 0,
            }}
          />
        ))} */}
      </AScrollView>
    </Container>
  );
};
