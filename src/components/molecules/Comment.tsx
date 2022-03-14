import React from 'react';
import { CommentDTO } from '@types';
import { formatDuration, renderAnonymousUserName } from '@utils';
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
import { Pill } from './Pill';
export interface CommentProps extends AViewProps {
  isClassTeacher?: boolean;
  comment: CommentDTO;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

export const Comment = ({
  isClassTeacher,
  comment,
  onPressEdit,
  onPressDelete,
  ...props
}: CommentProps) => {
  const { auth } = useAuth();
  const isAuthor = auth?.id === comment.author.id;

  return (
    <AView {...props}>
      <Row>
        <ContentTitle>{renderAnonymousUserName(comment.author)}</ContentTitle>
        {isClassTeacher && (
          <Pill color="orange3" backgroundColor="yellow1" title="담임" ml="s02" />
        )}
        <HelpText ml="s03">{formatDuration(comment.createdDateTime)}</HelpText>

        {isAuthor && (
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
