import React, { useEffect, useState } from 'react';
import { Animated, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import { useSlideUpAnimation } from '@hooks';
import { useMutation } from 'react-query';
import { useAuth } from '@stores';
import { API } from '@services';
import { ModalRouteProps } from '@types';

export const ReportScreen = () => {
  const nav = useNavigation();
  const {
    params: { targetId, targetType },
  } = useRoute<ModalRouteProps<'Report'>>();
  const { auth } = useAuth();
  const [reason, setReason] = useState<string>(reportList[0].text);

  const { animationStyle, onAppear, onDisapper } = useSlideUpAnimation();
  const submitMutation = useMutation(
    async () => {
      if (!auth) throw Error('잘못된 인증');

      await API.create_report({
        reportedUserId: auth.id,
        type: targetType,
        targetId,
        content: reason,
      });
    },
    {
      onSuccess: () => {
        goBack();
        nav.navigate('Alert', { text: '신고가 접수되었습니다.' });
      },
    },
  );

  useEffect(() => onAppear().start(), []);

  const goBack = () => {
    onDisapper().start();
    nav.goBack();
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={goBack}>
      <Animated.View
        style={[
          animationStyle,
          {
            marginTop: 'auto',
            backgroundColor: 'white',
            borderTopStartRadius: 24,
            borderTopEndRadius: 24,
          },
        ]}
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
        <AButton
          title="확인"
          ph="s06"
          mv="s06"
          loading={submitMutation.isLoading}
          onPress={() => submitMutation.mutate()}
        />
      </Animated.View>
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
