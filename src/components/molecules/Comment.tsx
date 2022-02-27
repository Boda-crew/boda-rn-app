import React from 'react';
import { CommentDTO } from '@types';
import { formatDuration } from '@utils';
import { useAuth } from '@stores';
import {
  ATouchableOpacity,
  AView,
  AViewProps,
  ContentText,
  ContentTitle,
  HelpText,
  Row,
} from '../atoms';
export interface CommentProps extends AViewProps {
  comment: CommentDTO;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

export const Comment = ({
  comment,
  onPressEdit,
  onPressDelete,
  ...props
}: CommentProps) => {
  const { auth } = useAuth();
  const isAuther = auth?.id === comment.author;

  return (
    <AView {...props}>
      <Row>
        <ContentTitle>{'익명 학생'}</ContentTitle>
        <HelpText ml="s03">{formatDuration(comment.createdDateTime)}</HelpText>

        {isAuther && (
          <>
            <HelpText> · </HelpText>

            <ATouchableOpacity onPress={onPressEdit}>
              <HelpText>수정</HelpText>
            </ATouchableOpacity>

            <HelpText> · </HelpText>

            <ATouchableOpacity onPress={onPressDelete}>
              <HelpText pcolor="red3">삭제</HelpText>
            </ATouchableOpacity>
          </>
        )}
      </Row>

      <ContentText mt="s03">{comment.content}</ContentText>
    </AView>
  );
};
