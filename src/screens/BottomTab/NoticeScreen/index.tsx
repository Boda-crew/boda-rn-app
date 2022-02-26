import React, { useState } from 'react';
import {
  Container,
  HelpText,
  ScreenTitle,
  SegmentedTab,
  Wrapper,
} from '@components';
import { NoticeItem } from './NoticeItem';
import { PostDTO } from '@types';
import { useNoticeListState } from '@stores';

export const NoticeScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { shatteredNotices, isLoading, refetch } = useNoticeListState();

  return (
    <Container>
      <ScreenTitle mt="s06" ml="s06">
        공지
      </ScreenTitle>

      <SegmentedTab
        selectedIdx={tabIndex}
        setSelectedIdx={setTabIndex}
        mt="s05"
        refreshing={isLoading}
        onRefresh={refetch}
        views={Object.keys(shatteredNotices).map(name => ({
          name,
          child: <NoticeList name={name} noticeList={shatteredNotices[name]} />,
        }))}
      />
    </Container>
  );
};

const NoticeList = ({
  name,
  noticeList,
}: {
  name: string;
  noticeList: PostDTO[];
}) => {
  return (
    <Wrapper pl="s06" pt="s05" ignoreFrist childStyle={{ mt: 's07' }}>
      {noticeList.map((notice, index) => (
        <NoticeItem
          key={index}
          notice={notice}
          isPrimary={!index}
          hideAcademy={name !== '전체'}
        />
      ))}
      {!noticeList.length && <HelpText>아직 공지가 없습니다</HelpText>}
    </Wrapper>
  );
};
