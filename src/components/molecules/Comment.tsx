import React from 'react';
import {
  ATouchableOpacity,
  AView,
  AViewProps,
  ContentText,
  ContentTitle,
  HelpText,
  Row,
} from '../atoms';

export interface CommentProps extends AViewProps {
  isAuther?: boolean;
  onEditComment?: () => void;
  onDeleteComment?: () => void;
}

export const Comment = ({
  isAuther,
  onEditComment,
  onDeleteComment,
  ...props
}: CommentProps) => {
  return (
    <AView {...props}>
      <Row>
        <ContentTitle>{'익명 학생'}</ContentTitle>
        <HelpText ml="s03">{'5분전'}</HelpText>

        {isAuther && (
          <>
            <HelpText> · </HelpText>

            <ATouchableOpacity onPress={onEditComment}>
              <HelpText>수정</HelpText>
            </ATouchableOpacity>

            <HelpText> · </HelpText>

            <ATouchableOpacity>
              <HelpText pcolor="red3" onPress={onDeleteComment}>
                삭제
              </HelpText>
            </ATouchableOpacity>
          </>
        )}
      </Row>

      <ContentText mt="s03">
        {'6시전 수업은 어떻게 하시나요? 임시 운행하시는 차량이 있나요?'}
      </ContentText>
    </AView>
  );
};
