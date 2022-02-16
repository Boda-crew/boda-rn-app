import React, { useState } from 'react';
import { AText, Container, SegmentedTab, Wrapper } from '@components';
import { NoticeItem } from './NoticeItem';

export const NoticeScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const noticeList = [...new Array(10)];

  return (
    <Container>
      <AText size={30} weight="700" ml="s06">
        공지
      </AText>

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
    <Wrapper ph="s06" pt="s05" gapStyle={{ mt: 's07' }}>
      {noticeList.map((_, index) => (
        <NoticeItem key={index} isPrimary={!index} />
      ))}

      {!noticeList.length && <AText pcolor="gray3">아직 공지가 없습니다</AText>}
    </Wrapper>
  );
};
