import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Badge,
  ContentTitle,
  HelpText,
  OpacityListItem,
  Pill,
  Row,
  Wrapper,
} from '@components';
import { PostDTO, ViewStyleProps } from '@types';
import { formatClock, formatDate } from '@utils';
import { useCommentListQuery } from '@stores';

interface Props {
  notice: PostDTO;
  isPrimary?: boolean;
  hideAcademy?: boolean;
  style?: ViewStyleProps;
}

export const NoticeItem = ({ notice, isPrimary, hideAcademy, style }: Props) => {
  const nav = useNavigation();
  const [commentCnt, setCommentCnt] = useState<number>();

  useCommentListQuery(notice.id, data => setCommentCnt(data.length));

  const navToNoticeDetail = () => nav.navigate('NoticeDetail', { notice });

  return (
    <OpacityListItem style={style} onPress={navToNoticeDetail}>
      <Badge
        theme={isPrimary ? 'primaryRed' : 'default'}
        title={formatDate(notice.createdDateTime)}
        iconName="announcement"
        iconSize={{ width: 18, height: 18 }}
      />

      <Wrapper ml="s06">
        <Row>
          {!hideAcademy && (
            <Pill title={notice.classrooms[0].academy.name} mr="s03" />
          )}
          <Pill title={notice.classrooms[0].name} />
        </Row>

        <ContentTitle mt="s03">{notice.title}</ContentTitle>

        <HelpText mt="s02">
          {formatClock(notice.createdDateTime)} · {notice.author} · 댓글 {commentCnt}
        </HelpText>
      </Wrapper>
    </OpacityListItem>
  );
};
