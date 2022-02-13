import { ViewStyleProps } from '@types';
import React from 'react';
import { View } from 'react-native';
import { AText, CommentButton, LikeButton, Row, Wrapper } from '../common';

interface Props {
  style?: ViewStyleProps;
}

export const CommentItem = ({ style }: Props) => {
  return (
    <View style={style}>
      <Row>
        <AText size={18} weight="700">
          {'익명 학부모'}
        </AText>
        <AText pcolor="gray3" style={{ marginLeft: 8 }}>
          {'10분전'}
        </AText>
      </Row>

      <AText pcolor="gray4" style={{ marginTop: 8 }}>
        {'6시전 수업은 어떻게 하시나요? 임시 운행하시는 차량이 있나요?'}
      </AText>

      <Wrapper
        style={{ marginTop: 16, flexDirection: 'row' }}
        gapStyle={{ marginLeft: 8 }}
      >
        <LikeButton selected={true} rated={10} onPress={() => console.log('like')} />
        <CommentButton cnt={3} onPress={() => console.log('comment')} />
        {/* <CommentWriterAction
                  comment={v}
                  onDelete={onDelete}
                  onEdit={props.onEdit}
                /> */}
      </Wrapper>
    </View>
  );
};
