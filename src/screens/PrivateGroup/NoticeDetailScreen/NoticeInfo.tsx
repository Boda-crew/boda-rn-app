import React from 'react';
import {
  AView,
  HeaderTitle,
  ScreenTitle,
  Pill,
  Row,
  HelpText,
  ContentText,
} from '@components';
import { PostDTO } from '@types';
import { formatCommon } from '@utils';

interface Props {
  notice: PostDTO;
}

export const NoticeInfo = ({ notice }: Props) => {
  const academyPillText = notice.classrooms[0].academy.name;
  const classroomPillText =
    notice.classrooms[0].name +
    (notice.classrooms.length > 1 ? `외 ${notice.classrooms.length - 1}` : '');

  return (
    <AView mt="s06" mb="s08" mh="s06">
      <ScreenTitle>{notice.title}</ScreenTitle>

      <Row mt="s07">
        <Pill title={academyPillText} />
        <Pill title={classroomPillText} ml="s03" />
      </Row>

      <HelpText mt="s04">
        {formatCommon(notice.createdDateTime)} · {notice.author}
      </HelpText>

      <HeaderTitle weight="700" mt="s07">
        공지 내용
      </HeaderTitle>
      <ContentText mt="s03">{notice.content}</ContentText>
    </AView>
  );
};
