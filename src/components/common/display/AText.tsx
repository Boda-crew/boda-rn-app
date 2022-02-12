import styled from '@emotion/native';
import { palette, PaletteColor } from '@styles';

export interface ATextProps {
  size?: number;
  color?: PaletteColor;
  weight?: '400' | '500' | '700';
  isCenter?: boolean;
  isUnderline?: boolean;
}

export const AText = styled.Text<ATextProps>(
  {},
  ({ size = 14, color = 'black', weight = '400', isCenter, isUnderline }) => ({
    fontSize: size,
    lineHeight: size + 6,
    color: palette[color],
    fontWeight: weight,
    ...(isCenter && { alignSelf: 'center', textAlign: 'center' }),
    ...(isUnderline && { textDecorationLine: 'underline' }),
  }),
);
