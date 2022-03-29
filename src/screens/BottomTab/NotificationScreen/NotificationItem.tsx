import {
  AView,
  ContentText,
  ContentTitle,
  HelpText,
  HightlightListItem,
  Icon,
  Pill,
  Row,
} from '@components';
import { useNavigation } from '@react-navigation/native';
import { palette } from '@styles';
import { NotificationDTO, ViewStyleProps } from '@types';
import { getDummyComment } from '@utils';
import React from 'react';

interface Props {
  item: NotificationDTO;
  style?: ViewStyleProps;
}

export const NotificationItem = ({ item }: Props) => {
  const nav = useNavigation();
  const query = item.targetString.split('/');

  const onPress = () => {
    if (query.length < 2) return;

    const commentId = +query[3];
    const postId = +query[1];
    nav.navigate('CommentDetail', {
      comment: getDummyComment({ commentId, postId }),
    });
  };

  return (
    <HightlightListItem onPress={onPress}>
      <Row pl="s06" pv="s06" style={[{ alignItems: 'flex-start' }]}>
        <Icon name="announcement" color={palette.primary} style={{ marginTop: 4 }} />

        <AView ml="s06" mr="s03" style={{ flex: 1 }}>
          {/* <Row>
          <Pill title="오렌지 학원" />
          <Pill title="오렌지주스반" ml="s03" />
        </Row> */}
          <ContentTitle numberOfLines={1}>{item.title}</ContentTitle>
          <ContentText mt="s03" numberOfLines={1}>
            {item.content}
          </ContentText>
          {/* <HelpText mt="s05">2021/3/31 오전 10:30</HelpText> */}
        </AView>
      </Row>
    </HightlightListItem>
  );
};
