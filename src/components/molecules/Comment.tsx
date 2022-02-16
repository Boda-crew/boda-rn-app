import React from 'react';
import {
  AText,
  ATouchableOpacity,
  AView,
  AViewProps,
  ContentText,
  ContentTitle,
  HelpText,
  Row,
} from '../atoms';

export const Comment = (props: AViewProps) => {
  return (
    <AView {...props}>
      <Row>
        <ContentTitle>{'익명 학생'}</ContentTitle>
        <HelpText ml="s03">{'5분전'}</HelpText>

        <HelpText> · </HelpText>

        <ATouchableOpacity>
          <HelpText>수정</HelpText>
        </ATouchableOpacity>

        <HelpText> · </HelpText>

        <ATouchableOpacity>
          <HelpText pcolor="red3">삭제</HelpText>
        </ATouchableOpacity>
      </Row>

      <ContentText mt="s03">
        {'6시전 수업은 어떻게 하시나요? 임시 운행하시는 차량이 있나요?'}
      </ContentText>
    </AView>
  );
};
