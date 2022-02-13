import styled from '@emotion/native';
import { palette, PaletteColor } from '@styles';

export interface ATextProps {
  size?: number;
  color?: string;
  pcolor?: PaletteColor;
  weight?: '400' | '500' | '700';
  isCenter?: boolean;
  isUnderline?: boolean;
}

export const AText = styled.Text<ATextProps>(
  {},
  ({
    size = 14,
    color = 'black',
    pcolor,
    weight = '400',
    isCenter,
    isUnderline,
  }) => ({
    fontSize: size,
    lineHeight: size + 6,
    color: pcolor ? palette[pcolor] : color,
    fontWeight: weight,
    ...(isCenter && { alignSelf: 'center', textAlign: 'center' }),
    ...(isUnderline && { textDecorationLine: 'underline' }),
  }),
);
