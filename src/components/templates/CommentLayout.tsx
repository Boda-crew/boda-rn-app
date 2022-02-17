import React, { useState } from 'react';
import { palette } from '@styles';
import { useNavigation } from '@react-navigation/native';
import { AText, AView, HeaderTitle, Row } from '../atoms';
import { CommentItem, WriteCommentForm } from '../organisms';
import { KeyboardTextInput } from '../molecules';

interface Props {
  comments: any[];
}

export const CommentLayout = ({ comments }: Props) => {
  const nav = useNavigation();
  const [editCommentTarget, setEditCommentTarget] = useState<string | undefined>();

  const navToCommentDetail = () => nav.navigate('CommentDetail');

  const onPressDelete = () => {
    nav.navigate('Confirm', {
      text: '해당 댓글을 삭제하시겠습니까?',
      isDanger: true,
      onConfirm: () => console.log('delete comment'),
    });
  };

  return (
    <AView pv="s08">
      <Row ph="s06">
        <HeaderTitle>
          댓글
          <AText pcolor={'primary'}>{' 2'}</AText>
        </HeaderTitle>
      </Row>

      <WriteCommentForm
        title="익명 댓글 쓰기"
        onSubmit={e => console.log(e)}
        mt="s07"
        mh="s06"
      />

      <AView mt="s04">
        {comments.map((_, idx) => (
          <CommentItem
            key={idx}
            isAuther
            onPressEdit={() => setEditCommentTarget('댓글 편집 테스트')}
            onPressReply={navToCommentDetail}
            onPressDelete={onPressDelete}
            pv="s06"
            mh="s06"
            style={{
              borderTopWidth: idx ? 1 : 0,
              borderColor: palette.gray1,
            }}
          />
        ))}
      </AView>

      <KeyboardTextInput
        open={!!editCommentTarget}
        initText={editCommentTarget}
        onClose={() => setEditCommentTarget(undefined)}
        onSubmit={e => console.log(e)}
      />
    </AView>
  );
};
