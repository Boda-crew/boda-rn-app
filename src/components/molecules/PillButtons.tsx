import React from 'react';
import { palette } from '@styles';
import {
  AText,
  ATouchableHighlight,
  ATouchableHighlightProps,
  Icon,
} from '../atoms';

export const PillButton = (props: ATouchableHighlightProps) => {
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
        props.style,
      ]}
    />
  );
};

interface CommentButtonProps extends ATouchableHighlightProps {
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

interface LikeButtonProps extends ATouchableHighlightProps {
  rated: number;
  selected?: boolean;
}

export const LikeButton = ({ rated, selected, ...props }: LikeButtonProps) => {
  const color = selected ? palette.primary : undefined;

  return (
    <PillButton {...props} style={[{ borderColor: color }, props.style]}>
      <Icon color={color} name={selected ? 'like' : 'like-outline'} />
      <AText color={color} weight="700" style={{ marginLeft: 6 }}>
        {rated}
      </AText>
    </PillButton>
  );
};
