import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CommentDTO, CommentType } from '@types';
import { formatDuration, renderAnonymousUserName } from '@utils';
import { useAuth, useBloackedUserIdList } from '@stores';
import {
  ATouchableOpacity,
  AView,
  AViewProps,
  ContentText,
  ContentTitle,
  HelpText,
  Icon,
  Row,
} from '../atoms';
import { Pill } from './Pill';
export interface CommentProps extends AViewProps {
  comment: CommentDTO;
  commentType: CommentType;
  isClassTeacher?: boolean;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

export const Comment = ({
  comment,
  isClassTeacher,
  onPressEdit,
  onPressDelete,
  ...props
}: CommentProps) => {
  const { auth } = useAuth();
  const nav = useNavigation();
  const { blockedUserIdList, toggleBlockedComment } = useBloackedUserIdList();
  const isBlocked = blockedUserIdList.includes(comment.author.id);
  const isAuthor = auth?.id === comment.author.id;

  const onPressReport = () => {
    nav.navigate('Report', { targetType: '댓글', targetId: comment.id });
  };

  const onBlockComment = () => {
    nav.navigate('Confirm', {
      text: isBlocked ? '차단을 해제하시겠습니까?' : '해당 댓글을 차단하시겠습니까?',
      onConfirm: async () => {
        toggleBlockedComment(comment.author.id);
      },
    });
  };

  return (
    <AView {...props}>
      <Row>
        <ContentTitle>{renderAnonymousUserName(comment.author)}</ContentTitle>
        {isClassTeacher && (
          <Pill color="orange3" backgroundColor="yellow1" title="담임" ml="s02" />
        )}
        <HelpText ml="s03">{formatDuration(comment.createdDateTime)}</HelpText>

        {isAuthor ? (
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
        ) : (
          <>
            <HelpText> · </HelpText>
            <ATouchableOpacity onPress={onPressReport}>
              <HelpText>신고</HelpText>
            </ATouchableOpacity>
            <HelpText> · </HelpText>
            <ATouchableOpacity onPress={onBlockComment}>
              <HelpText>차단</HelpText>
            </ATouchableOpacity>
          </>
        )}
      </Row>

      <AView mt="s03">
        {isBlocked ? (
          <Row ml="s02">
            <Icon name="information" width={16} color="gray" />
            <ContentText ml="s03">내가 차단한 댓글입니다.</ContentText>
          </Row>
        ) : (
          <ContentText>{comment.content}</ContentText>
        )}
      </AView>
    </AView>
  );
};
