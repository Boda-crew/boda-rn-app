import React from 'react';
import { PostDTO } from '@types';
import { AView, ContentText, HeaderTitle, HelpText, ScreenTitle } from '@components';
import { formatCommon, renderAssingmentTitle } from '@utils';

interface Props {
  assingment: PostDTO;
}

export const AssignmentInfo = ({ assingment }: Props) => {
  return (
    <AView mt="s06" mb="s08" mh="s06">
      <ScreenTitle>{renderAssingmentTitle(assingment)}</ScreenTitle>

      <HeaderTitle weight="700" mt="s07">
        교재
      </HeaderTitle>
      <ContentText mt="s03">{assingment.textbook}</ContentText>

      <HeaderTitle weight="700" mt="s07">
        과제
      </HeaderTitle>
      <ContentText mt="s03">{assingment.content}</ContentText>
    </AView>
  );
};
