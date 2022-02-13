import React from 'react';
import { View } from 'react-native';
import { palette } from '@styles';
import { Row, AText, ATouchableOpacity } from '../common';
import { CommentItem } from '../domains';
import { useNavigation } from '@react-navigation/native';

interface Props {
  comments: any[];
}

export const CommentLayout = ({ comments }: Props) => {
  const nav = useNavigation();

  const navToCommentDetail = () => nav.navigate('CommentDetail');

  return (
    <View style={{ paddingVertical: 40 }}>
      <Row style={{ paddingHorizontal: 24 }}>
        <AText size={22} weight="700">
          댓글
        </AText>
        <AText size={22} weight="700" pcolor={'primary'} style={{ marginLeft: 8 }}>
          {'2'}
        </AText>
      </Row>

      {/* <KeyboardTextInput
        title="익명 댓글 쓰기"
        style={{ marginTop: 32 }}
        onSubmit={props.onWrite}
      /> */}

      <View>
        {comments
          //   .sort((a, b) => {
          //     const dis = b.like_count - a.like_count;
          //     if (dis) return dis;
          //     return (
          //       new Date(b.created_date).getTime() - new Date(a.created_date).getTime()
          //     );
          //   })
          .map((_, idx) => (
            <ATouchableOpacity key={idx} onPress={navToCommentDetail}>
              <CommentItem
                style={{
                  paddingVertical: 24,
                  marginHorizontal: 24,
                  borderTopWidth: idx ? 1 : 0,
                  borderColor: palette.gray1,
                }}
              />
            </ATouchableOpacity>
          ))}
      </View>
    </View>
  );
};
