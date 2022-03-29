import React, { useState } from 'react';
import {
  AView,
  Container,
  HelpText,
  ScreenTitle,
  SegmentedTab,
  Wrapper,
} from '@components';
import { NotificationItem } from './NotificationItem';
import { useNotificationListStore } from '@stores';
import { NotificationDTO } from '@types';

export const NotificationScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { notificationList, isLoading, refetch } = useNotificationListStore();

  return (
    <Container>
      <ScreenTitle mt="s06" ml="s06">
        알림
      </ScreenTitle>

      <SegmentedTab
        selectedIdx={tabIndex}
        setSelectedIdx={setTabIndex}
        refreshing={isLoading}
        onRefresh={refetch}
        mt="s05"
        views={[
          {
            name: '전체',
            child: <NotificationList notificationList={notificationList} />,
          },
        ]}
      />
    </Container>
  );
};

const NotificationList = ({
  notificationList,
}: {
  notificationList: NotificationDTO[];
}) => {
  return (
    <AView>
      {notificationList.map((item, index) => (
        <NotificationItem key={index} item={item} />
      ))}
      {!notificationList.length && <HelpText>아직 알림이 없습니다</HelpText>}
    </AView>
  );
};
