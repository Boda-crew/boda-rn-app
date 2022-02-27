import React from 'react';
import { AScrollView, AssignmentItem, ScreenTitle, Wrapper } from '@components';
import { useAssignmentListState } from '@stores';
import { useRoute } from '@react-navigation/native';
import { PrivateRouteProps } from '@types';

export const AssignmentTotalScreen = () => {
  const { shatteredAssignments, isLoading, refetch } = useAssignmentListState();

  const {
    params: { academyName, classroomName },
  } = useRoute<PrivateRouteProps<'AssignmentTotal'>>();

  return (
    <AScrollView refreshing={isLoading} onRefresh={refetch}>
      <ScreenTitle mt="s06" ml="s06">
        {classroomName} 과제
      </ScreenTitle>

      <Wrapper
        key={classroomName}
        mt="s08"
        pl="s06"
        ignoreFrist
        childStyle={{ mt: 's07' }}
      >
        {shatteredAssignments[academyName][classroomName].map((v, index) => (
          <AssignmentItem key={v.id} assignment={v} isPrimary={!index} />
        ))}
      </Wrapper>
    </AScrollView>
  );
};
