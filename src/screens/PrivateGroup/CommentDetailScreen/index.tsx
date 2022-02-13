import React from 'react';
import { View } from 'react-native';
import { AScrollView, AText, CommentItem, Container, ReplyItem } from '@components';
import { palette } from '@styles';

export const CommentDetailScreen = () => {
  return (
    <Container>
      <AScrollView>
        <View style={{ padding: 24 }}>
          <AText size={22} weight="700">
            답글 {3}
          </AText>
        </View>

        <View style={{ padding: 24, backgroundColor: palette.gray0 }}>
          <CommentItem />
        </View>

        {[...new Array(10)].map((v, i) => (
          <ReplyItem
            key={i}
            style={{
              paddingVertical: 24,
              marginHorizontal: 24,
              borderTopColor: palette.gray1,
              borderTopWidth: i ? 1 : 0,
            }}
          />
        ))}
      </AScrollView>
    </Container>
  );
};
