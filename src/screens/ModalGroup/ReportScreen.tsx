import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  AButton,
  ATouchableHighlight,
  AView,
  ContentText,
  ContentTitle,
  Icon,
  Row,
} from '@components';
import { palette } from '@styles';

export const ReportScreen = () => {
  const nav = useNavigation();
  const [reason, setReason] = useState<string>(reportList[0].text);

  return (
    <Pressable style={{ flex: 1 }} onPress={nav.goBack}>
      <AView
        mt="auto"
        bc="white"
        style={{ borderTopStartRadius: 24, borderTopEndRadius: 24 }}
      >
        <ContentTitle mt="s07" mb="s06" mh="s06">
          이 댓글을 신고하는 이유
        </ContentTitle>

        {reportList.map(({ text }, index) => {
          const isSelected = text === reason;
          const color = isSelected ? palette.primary : palette.gray2;

          return (
            <ATouchableHighlight
              key={index}
              pv="s05"
              ph="s06"
              onPress={() => setReason(text)}
            >
              <Row>
                <ContentText weight="500">{text}</ContentText>
                <AView ml="auto">
                  <Icon name="check" color={color} />
                </AView>
              </Row>
            </ATouchableHighlight>
          );
        })}
        <AButton title="확인" ph="s06" mv="s06" onPress={() => nav.goBack()} />
      </AView>
    </Pressable>
  );
};

const reportList = [
  { text: '스팸, 광고' },
  { text: '폭언, 비속어, 혐오 발언' },
  { text: '음란성, 선정성 글' },
  { text: '개인정보 노출' },
  { text: '주제와 무관' },
];
