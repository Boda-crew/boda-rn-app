import React from 'react';
import { Animated } from 'react-native';
import { palette } from '@styles';
import { AText, AViewProps } from '../atoms';

interface Props extends AViewProps {
  title: string;
  subTitle?: string;
  scrollY: Animated.Value;
  children?: JSX.Element | JSX.Element[];
  vertical?: boolean;
}

export const TabHeader = ({
  title,
  subTitle,
  scrollY,
  vertical,
  children,
  ...props
}: Props) => {
  const { borderBottomColor, subTitleOpacity } = headerContainerAnimation(scrollY);

  return (
    <Animated.View
      {...props}
      style={[
        {
          backgroundColor: 'white',
          flexDirection: vertical ? 'column' : 'row',
          alignItems: vertical ? 'flex-start' : 'flex-end',
          paddingHorizontal: 24,
          paddingBottom: 8,
          borderBottomWidth: 1,
          borderBottomColor,
          marginBottom: 20,
        },
        props.style,
      ]}
    >
      <AText size={30} weight="700">
        {title}
      </AText>

      <Animated.View
        style={{
          opacity: subTitleOpacity,
          marginLeft: 20,
          marginBottom: 4,
        }}
      >
        {subTitle && <AText pcolor="primary">{subTitle}</AText>}
      </Animated.View>

      {children}
    </Animated.View>
  );
};

const headerContainerAnimation = (scrollY: Animated.Value) => {
  const subTitleOpacity = scrollY.interpolate({
    inputRange: [100, 120],
    outputRange: [0, 1],
  });
  const borderBottomColor = scrollY.interpolate({
    inputRange: [132, 140, 140],
    outputRange: ['#FFF', palette.gray0, palette.gray0],
  });
  return { subTitleOpacity, borderBottomColor };
};
