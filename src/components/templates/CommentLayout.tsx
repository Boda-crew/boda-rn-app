import React from 'react';
import { View } from 'react-native';
import { palette } from '@styles';
import { useNavigation } from '@react-navigation/native';
import { AText, AView, HeaderTitle, Row } from '../atoms';
import { CommentItem } from '../organisms';

interface Props {
  comments: any[];
}

export const CommentLayout = ({ comments }: Props) => {
  const nav = useNavigation();

  const navToCommentDetail = () => nav.navigate('CommentDetail');

  return (
    <AView pv="s08">
      <Row ph="s06">
        <HeaderTitle>
          댓글
          <AText pcolor={'primary'}>{' 2'}</AText>
        </HeaderTitle>
      </Row>

      {/* <KeyboardTextInput
        title="익명 댓글 쓰기"
        style={{ marginTop: 32 }}
        onSubmit={props.onWrite}
      /> */}

      <View>
        {comments.map((_, idx) => (
          <CommentItem
            key={idx}
            onPressReply={navToCommentDetail}
            pv="s06"
            mh="s06"
            style={{
              borderTopWidth: idx ? 1 : 0,
              borderColor: palette.gray1,
            }}
          />
        ))}
      </View>
    </AView>
  );
};
