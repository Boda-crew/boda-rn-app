import React from 'react';
import { PostDTO } from '@types';
import { AView, ContentText, HeaderTitle, HelpText, ScreenTitle } from '@components';
import { renderAssignmentTitle } from '@utils';

interface Props {
  assignment: PostDTO;
}

export const AssignmentInfo = ({ assignment }: Props) => {
  return (
    <AView mt="s06" mb="s08" mh="s06">
      <ScreenTitle>{renderAssignmentTitle(assignment)}</ScreenTitle>

      <HeaderTitle weight="700" mt="s07">
        교재
      </HeaderTitle>
      <ContentText mt="s03">{assignment.textbook}</ContentText>

      <HeaderTitle weight="700" mt="s07">
        과제
      </HeaderTitle>
      <ContentText mt="s03">{assignment.content}</ContentText>
    </AView>
  );
};
