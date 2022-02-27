import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { palette } from '@styles';
import { ATouchableOpacity } from './ATouchableOpacity';

interface HeaderButtonProps {
  onPress?: () => void;
}

export const HeaderLeftCloseButton = ({ onPress }: HeaderButtonProps) => {
  return (
    <ATouchableOpacity onPress={onPress} style={{ paddingLeft: 16 }}>
      <EvilIcons name="close" size={24} />
    </ATouchableOpacity>
  );
};

export const HeaderLeftBackButton = ({ onPress }: HeaderButtonProps) => {
  return (
    <ATouchableOpacity onPress={onPress} style={{ paddingLeft: 8 }}>
      <EvilIcons name="chevron-left" size={40} />
    </ATouchableOpacity>
  );
};
