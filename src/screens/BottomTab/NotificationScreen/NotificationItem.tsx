import {
  AView,
  ContentText,
  ContentTitle,
  HelpText,
  Icon,
  Pill,
  Row,
} from '@components';
import { palette } from '@styles';
import { ViewStyleProps } from '@types';
import React from 'react';

interface Props {
  style?: ViewStyleProps;
}

export const NotificationItem = ({ style }: Props) => {
  return (
    <Row style={[{ alignItems: 'flex-start' }, style]}>
      <Icon name="announcement" color={palette.primary} style={{ marginTop: 4 }} />

      <AView ml="s06" style={{ flex: 1 }}>
        <Row>
          <Pill title="오렌지 학원" />
          <Pill title="오렌지주스반" ml="s03" />
        </Row>
        <ContentTitle mt="s04">새로운 공지가 올라왔습니다</ContentTitle>
        <ContentText mt="s03">
          차량시간 변경: 안녕하세요, 현재 차량이 정...
        </ContentText>
        <HelpText mt="s05">2021/3/31 오전 10:30</HelpText>
      </AView>
    </Row>
  );
};
