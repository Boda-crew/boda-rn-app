import React from 'react';
import { AText, Pill, Row } from '@components';
import { View } from 'react-native';

interface Props {}

export const NoticeInfo = (props: Props) => {
  return (
    <View style={{ marginVertical: 40, marginHorizontal: 24 }}>
      <AText size={30} weight="700">
        {'차량시간 변경'}
      </AText>

      <Row style={{ marginTop: 40 }}>
        <Pill title={'사과학원'} />
        <Pill title={'사과나무반'} style={{ marginLeft: 8 }} />
      </Row>

      <AText pcolor="gray4" style={{ marginTop: 16 }}>
        {'오전 10:15'} · {'장재훈'}
      </AText>

      <AText size={22} weight="700" style={{ marginTop: 32 }}>
        공지 내용
      </AText>
      <AText style={{ marginTop: 16 }}>
        {
          '안녕하세요, 현재 차량이 정비를 받고있어 이번주 수요일은 차량시간을 오후 6시부터 운행합니다. 불편을 드려서 죄송합니다 😭'
        }
      </AText>
    </View>
  );
};
