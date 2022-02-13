import React from 'react';
import { View } from 'react-native';
import { ViewStyleProps } from '@types';
import { AText, Row } from '../common';

interface Props {
  style?: ViewStyleProps;
}

export const ReplyItem = ({ style }: Props) => {
  return (
    <View style={style}>
      <Row>
        <AText size={18} weight="700">
          {'익명 학생'}
        </AText>
        <AText pcolor="gray3" style={{ marginLeft: 8 }}>
          {'5분전'}
        </AText>
      </Row>

      <AText pcolor="gray4" style={{ marginTop: 8 }}>
        {'6시전 수업은 어떻게 하시나요? 임시 운행하시는 차량이 있나요?'}
      </AText>
    </View>
  );
};
