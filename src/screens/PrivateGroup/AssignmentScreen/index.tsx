import React, { useState } from 'react';
import {
  AssignmentItem,
  AView,
  ScreenTitle,
  SegmentedTab,
  Wrapper,
} from '@components';
import { useAssignmentListState } from '@stores';

export const AssignmentScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { assignmentList } = useAssignmentListState();

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
              <Wrapper pt="s06" pl="s06" ignoreFrist childStyle={{ mt: 's07' }}>
                {assignmentList.map((v, index) => (
                  <AssignmentItem key={v.id} assignment={v} isPrimary={!index} />
                ))}
              </Wrapper>
            ),
          },
        ]}
      />
    </AView>
  );
};
