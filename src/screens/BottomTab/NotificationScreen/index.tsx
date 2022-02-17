import React, { useState } from 'react';
import {
  Container,
  HelpText,
  ScreenTitle,
  SegmentedTab,
  Wrapper,
} from '@components';
import { NotificationItem } from './NotificationItem';

export const NotificationScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const notificationList = [...new Array(10)];

  return (
    <Container>
      <ScreenTitle ml="s06">알림</ScreenTitle>

      <SegmentedTab
        selectedIdx={tabIndex}
        setSelectedIdx={setTabIndex}
        mt="s05"
        views={[
          {
            name: '전체',
            child: <NotificationList notificationList={notificationList} />,
          },
          {
            name: '사과학원',
            child: <NotificationList notificationList={notificationList} />,
          },
        ]}
      />
    </Container>
  );
};

const NotificationList = ({ notificationList }: { notificationList: any[] }) => {
  return (
    <Wrapper pl="s06" pt="s06" gapStyle={{ mt: 's07' }}>
      {notificationList.map((_, index) => (
        <NotificationItem key={index} />
      ))}

      {!notificationList.length && <HelpText>아직 알림이 없습니다</HelpText>}
    </Wrapper>
  );
};
