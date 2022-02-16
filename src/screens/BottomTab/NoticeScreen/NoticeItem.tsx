import React from 'react';
import { AText, Badge, OpacityListItem, Pill, Row, Wrapper } from '@components';
import { ViewStyleProps } from '@types';
import { useNavigation } from '@react-navigation/native';

interface Props {
  isPrimary?: boolean;
  hideAcademy?: boolean;
  style?: ViewStyleProps;
}

export const NoticeItem = ({ isPrimary, hideAcademy, style }: Props) => {
  const nav = useNavigation();

  const navToNoticeDetail = () => nav.navigate('NoticeDetail');

  return (
    <OpacityListItem style={style} onPress={navToNoticeDetail}>
      <Badge
        theme={isPrimary ? 'primaryRed' : 'default'}
        title={'3/31'}
        iconName="announcement"
        iconSize={{ width: 18, height: 18 }}
      />
      <Wrapper style={{ marginLeft: 24 }}>
        <Row>
          {!hideAcademy && <Pill title={'사과학원'} mr="s03" />}
          <Pill title={'사과나무반'} />
        </Row>

        <AText weight="700" size={18} mt="s03">
          차량시간 변경
        </AText>
        <AText pcolor="gray3" size={16} mt="s02">
          오전 10:15 · 정재훈 · 댓글 2
          {/* {Time.formatClock(v.created_date)} · {v.writer.human_name} · 댓글{' '} */}
          {/* {v.comments.length} */}
        </AText>
      </Wrapper>
    </OpacityListItem>
  );
};
