import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Badge,
  ContentTitle,
  HelpText,
  OpacityListItem,
  Wrapper,
} from '@components';
import { PostDTO, ViewStyleProps } from '@types';
import { formatClock, formatDate } from '@utils';
import { useCommentListQuery } from '@stores';
import { ContentText } from '../atoms';

interface Props {
  assignment: PostDTO;
  isPrimary?: boolean;
  style?: ViewStyleProps;
}

export const AssignmentItem = ({ assignment, isPrimary, style }: Props) => {
  const nav = useNavigation();
  const [commentCnt, setCommentCnt] = useState<number>();

  useCommentListQuery(assignment.id, data => setCommentCnt(data.length));

  const navToAssignmentDetail = () =>
    nav.navigate('AssignmentDetail', { assignment });

  return (
    <OpacityListItem style={style} onPress={navToAssignmentDetail}>
      <Badge
        size="small"
        theme={isPrimary ? 'primaryRed' : 'default'}
        title={formatDate(assignment.createdDateTime)}
      />

      <Wrapper ml="s06" style={{ flex: 1 }}>
        <ContentTitle mt="s02" numberOfLines={1}>
          {assignment.content}
        </ContentTitle>

        <ContentText mt="s02" numberOfLines={1}>
          교재: {assignment.textbook}
        </ContentText>

        <HelpText mt="s03">
          {formatClock(assignment.createdDateTime)} · 댓글 {commentCnt}
        </HelpText>
      </Wrapper>
    </OpacityListItem>
  );
};
