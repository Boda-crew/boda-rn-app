import React from 'react';
import { TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { palette } from '@styles';

interface HeaderButtonProps {
  onPress?: () => void;
}

export const HeaderLeftCloseButton = ({ onPress }: HeaderButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingLeft: 16 }}>
      <EvilIcons name="close" size={24} color={palette.primary} />
    </TouchableOpacity>
  );
};

export const HeaderLeftBackButton = ({ onPress }: HeaderButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingLeft: 8 }}>
      <EvilIcons name="chevron-left" size={40} color={palette.primary} />
    </TouchableOpacity>
  );
};
