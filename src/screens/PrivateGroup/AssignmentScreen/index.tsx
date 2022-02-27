import React, { useState } from 'react';
import {
  AssignmentItem,
  AView,
  ScreenTitle,
  SegmentedTab,
  Wrapper,
} from '@components';

export const AssignmentScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <AView style={{ flex: 1 }}>
      <ScreenTitle mt="s06" ml="s06">
        과제
      </ScreenTitle>

      <SegmentedTab
        selectedIdx={tabIndex}
        setSelectedIdx={setTabIndex}
        mt="s05"
        views={[
          {
            name: '고수학학원',
            child: (
              <Wrapper pl="s06" pt="s06" ignoreFrist childStyle={{ mt: 's07' }}>
                <AssignmentItem
                  assignment={{
                    id: 1,
                    content: '',
                    classrooms: [],
                    author: 2,
                    createdDateTime: new Date(),
                    updatedDateTime: new Date(),
                    title: '페이지 40 - 51',
                    textbook: '나무종류의 이해',
                    type: '과제',
                  }}
                />
              </Wrapper>
            ),
          },
        ]}
      />
    </AView>
  );
};
