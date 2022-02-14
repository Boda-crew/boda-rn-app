import React from 'react';
import { TouchableHighlightProps } from 'react-native';
import { palette } from '@styles';
import { AText, ATouchableHighlight, Icon } from '../atoms';

export const PillButton = ({ style, ...props }: TouchableHighlightProps) => {
  return (
    <ATouchableHighlight
      underlayColor={palette.gray1}
      {...props}
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: palette.white,
          borderWidth: 1,
          borderColor: palette.gray2,
          borderRadius: 80,
          paddingVertical: 8,
          paddingHorizontal: 16,
        },
        style,
      ]}
    />
  );
};

interface CommentButtonProps extends TouchableHighlightProps {
  cnt: number;
}

export const ReplyButton = ({ cnt, ...props }: CommentButtonProps) => {
  return (
    <PillButton {...props}>
      <Icon name="comment" />
      <AText weight="700" style={{ marginLeft: 6 }}>
        {cnt}
      </AText>
    </PillButton>
  );
};

interface LikeButtonProps extends TouchableHighlightProps {
  rated: number;
  selected?: boolean;
}

export const LikeButton = ({ rated, selected, ...props }: LikeButtonProps) => {
  const color = selected ? palette.primary : undefined;

  return (
    <PillButton {...props} style={{ borderColor: color }}>
      <Icon color={color} name={selected ? 'like' : 'like-outline'} />
      <AText color={color} weight="700" style={{ marginLeft: 6 }}>
        {rated}
      </AText>
    </PillButton>
  );
};
