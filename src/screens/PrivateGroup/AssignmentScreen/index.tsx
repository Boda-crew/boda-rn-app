import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  AButton,
  AssignmentItem,
  AView,
  HeaderTitle,
  ScreenTitle,
  SegmentedTab,
  Wrapper,
} from '@components';
import { useAssignmentListState } from '@stores';
import { PrivateParamList } from '@types';

export const AssignmentScreen = () => {
  const nav = useNavigation();
  const [tabIndex, setTabIndex] = useState(0);

  const { shatteredAssignments, isLoading, refetch } = useAssignmentListState();

  const navToAssignmentTotal = (params: PrivateParamList['AssignmentTotal']) => {
    nav.navigate('AssignmentTotal', params);
  };

  return (
    <AView style={{ flex: 1 }}>
      <ScreenTitle mt="s06" ml="s06">
        과제
      </ScreenTitle>

      <SegmentedTab
        selectedIdx={tabIndex}
        setSelectedIdx={setTabIndex}
        mt="s05"
        refreshing={isLoading}
        onRefresh={refetch}
        views={
          !Object.keys(shatteredAssignments).length
            ? [{ name: '', child: <></> }]
            : Object.keys(shatteredAssignments).map(academyName => {
                const classroomList = Object.keys(shatteredAssignments[academyName]);

                return {
                  name: academyName,
                  child: (
                    <>
                      {classroomList.map(classroomName => (
                        <AView key={classroomName}>
                          <HeaderTitle mt="s07" mh="s06">
                            {classroomName}
                          </HeaderTitle>

                          <Wrapper
                            mt="s06"
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
                          <AButton
                            kind="secondary"
                            title="모두 보기"
                            mt="s07"
                            mh="s06"
                            onPress={() =>
                              navToAssignmentTotal({ academyName, classroomName })
                            }
                          />
                        </AView>
                      ))}
                    </>
                  ),
                };
              })
        }
      />
    </AView>
  );
};
