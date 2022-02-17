import React, { useState } from 'react';
import {
  Container,
  HelpText,
  ScreenTitle,
  SegmentedTab,
  Wrapper,
} from '@components';
import { NoticeItem } from './NoticeItem';

export const NoticeScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const noticeList = [...new Array(10)];

  return (
    <Container>
      <ScreenTitle ml="s06">공지</ScreenTitle>

      <SegmentedTab
        selectedIdx={tabIndex}
        setSelectedIdx={setTabIndex}
        mt="s05"
        views={[
          {
            name: '전체',
            child: <NoticeList noticeList={noticeList} />,
          },
          {
            name: '사과학원',
            child: <NoticeList noticeList={noticeList} />,
          },
        ]}
      />
    </Container>
  );
};

const NoticeList = ({ noticeList }: { noticeList: any[] }) => {
  return (
    <Wrapper pl="s06" pt="s05" ignoreFrist childStyle={{ mt: 's07' }}>
      {noticeList.map((_, index) => (
        <NoticeItem key={index} isPrimary={!index} />
      ))}

      {!noticeList.length && <HelpText>아직 공지가 없습니다</HelpText>}
    </Wrapper>
  );
};
