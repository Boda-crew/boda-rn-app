import React from 'react';
import { AText, AView, Pill, Row } from '@components';

interface Props {}

export const NoticeInfo = (props: Props) => {
  return (
    <AView mv="s08" mh="s06">
      <AText size={30} weight="700">
        {'차량시간 변경'}
      </AText>

      <Row mt="s08">
        <Pill title={'사과학원'} />
        <Pill title={'사과나무반'} ml="s03" />
      </Row>

      <AText pcolor="gray4" mt="s04">
        {'오전 10:15'} · {'장재훈'}
      </AText>

      <AText size={22} weight="700" mt="s07">
        공지 내용
      </AText>
      <AText mt="s03">
        {
          '안녕하세요, 현재 차량이 정비를 받고있어 이번주 수요일은 차량시간을 오후 6시부터 운행합니다. 불편을 드려서 죄송합니다 😭'
        }
      </AText>
    </AView>
  );
};
