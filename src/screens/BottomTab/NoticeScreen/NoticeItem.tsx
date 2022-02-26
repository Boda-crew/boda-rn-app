import React from 'react';
import {
  AText,
  Badge,
  ContentTitle,
  HelpText,
  OpacityListItem,
  Pill,
  Row,
  Wrapper,
} from '@components';
import { PostDTO, ViewStyleProps } from '@types';
import { useNavigation } from '@react-navigation/native';
import { formatClock, formatDate } from '@utils';

interface Props {
  notice: PostDTO;
  isPrimary?: boolean;
  hideAcademy?: boolean;
  style?: ViewStyleProps;
}

export const NoticeItem = ({ notice, isPrimary, hideAcademy, style }: Props) => {
  const nav = useNavigation();

  const navToNoticeDetail = () => nav.navigate('NoticeDetail');

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
          {formatClock(notice.createdDateTime)} · {notice.author} · 댓글 2
          {/* {Time.formatClock(v.created_date)} · {v.writer.human_name} · 댓글{' '} */}
          {/* {v.comments.length} */}
        </HelpText>
      </Wrapper>
    </OpacityListItem>
  );
};
