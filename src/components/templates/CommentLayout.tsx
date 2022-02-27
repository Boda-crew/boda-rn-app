import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { palette } from '@styles';
import { API, NotiService } from '@services';
import { CommentDTO } from '@types';

import { AText, AView, HeaderTitle, Row } from '../atoms';
import { CommentItem, WriteCommentForm } from '../organisms';
import { KeyboardTextInput } from '../molecules';
import { useMutation } from 'react-query';
interface Props {
  comments: CommentDTO[];
}

export const CommentLayout = ({ comments }: Props) => {
  const nav = useNavigation();
  const [editCommentTarget, setEditCommentTarget] = useState<CommentDTO>();

  const editComment = useMutation(async (content: string) => {
    if (!editCommentTarget) return;

    return API.update_comment(editCommentTarget.id, { content });
  });

  const navToCommentDetail = (comment: CommentDTO) =>
    nav.navigate('CommentDetail', { comment });

  const onPressDelete = () => {
    nav.navigate('Confirm', {
      text: '해당 댓글을 삭제하시겠습니까?',
      isDanger: true,
      onConfirm: () => console.log('delete comment'),
    });
  };

  const onSubmitEdit = (text: string) => {
    NotiService.onDisplayNotification({
      body: '댓글이 수정되었습니다.',
    });
  };

  return (
    <AView pv="s08">
      <Row ph="s06">
        <HeaderTitle>
          댓글
          <AText pcolor={'primary'}> {comments.length}</AText>
        </HeaderTitle>
      </Row>

      <WriteCommentForm
        title="익명 댓글 쓰기"
        onSubmit={e => console.log(e)}
        mt="s07"
        mh="s06"
      />

      <AView mt="s04">
        {comments.map((comment, idx) => (
          <CommentItem
            key={idx}
            comment={comment}
            onPressEdit={() => setEditCommentTarget(comment)}
            onPressReply={() => navToCommentDetail(comment)}
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
        initText={editCommentTarget?.content}
        onClose={() => setEditCommentTarget(undefined)}
        onSubmit={onSubmitEdit}
      />
    </AView>
  );
};
