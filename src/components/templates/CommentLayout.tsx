import React from 'react';
import { View } from 'react-native';
import { palette } from '@styles';
import { useNavigation } from '@react-navigation/native';
import { AText, AView, Row } from '../atoms';
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
        <AText size={22} weight="700">
          댓글
        </AText>
        <AText size={22} weight="700" pcolor={'primary'} ml="s02">
          {'2'}
        </AText>
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
