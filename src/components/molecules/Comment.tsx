import React from 'react';
import { AText, ATouchableOpacity, AView, AViewProps, Row } from '../atoms';

export const Comment = (props: AViewProps) => {
  return (
    <AView {...props}>
      <Row>
        <AText size={18} weight="700">
          {'익명 학생'}
        </AText>
        <AText pcolor="gray3" style={{ marginLeft: 8 }}>
          {'5분전'}
        </AText>
        <AText pcolor="gray3"> · </AText>
        <ATouchableOpacity>
          <AText pcolor="gray3">수정</AText>
        </ATouchableOpacity>
        <AText pcolor="gray3"> · </AText>
        <ATouchableOpacity>
          <AText pcolor="red3">삭제</AText>
        </ATouchableOpacity>
      </Row>

      <AText pcolor="gray4" style={{ marginTop: 8 }}>
        {'6시전 수업은 어떻게 하시나요? 임시 운행하시는 차량이 있나요?'}
      </AText>
    </AView>
  );
};
