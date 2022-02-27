import React, { useState } from 'react';
import {
  AButton,
  AssignmentItem,
  AView,
  ContentTitle,
  HeaderTitle,
  ScreenTitle,
  SegmentedTab,
  Wrapper,
} from '@components';
import { useAssignmentListState } from '@stores';

export const AssignmentScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { shatteredAssignments, refetch } = useAssignmentListState();

  return (
    <AView style={{ flex: 1 }}>
      <ScreenTitle mt="s06" ml="s06">
        과제
      </ScreenTitle>

      <SegmentedTab
        selectedIdx={tabIndex}
        setSelectedIdx={setTabIndex}
        mt="s05"
        onRefresh={refetch}
        views={Object.keys(shatteredAssignments).map(academyName => {
          const classroomList = Object.keys(shatteredAssignments[academyName]);

          return {
            name: academyName,
            child: (
              <>
                {classroomList.map(classroomName => (
                  <AView>
                    <HeaderTitle mt="s07" mh="s06">
                      {classroomName}
                    </HeaderTitle>

                    <Wrapper
                      key={classroomName}
                      pt="s06"
                      pl="s06"
                      ignoreFrist
                      childStyle={{ mt: 's07' }}
                    >
                      {shatteredAssignments[academyName][classroomName]
                        .slice(0, 3)
                        .map((v, index) => (
                          <AssignmentItem
                            key={v.id}
                            assignment={v}
                            isPrimary={!index}
                          />
                        ))}
                    </Wrapper>
                    <AButton kind="secondary" title="모두 보기" mt="s07" mh="s06" />
                  </AView>
                ))}
              </>
            ),
          };
        })}
      />
    </AView>
  );
};
