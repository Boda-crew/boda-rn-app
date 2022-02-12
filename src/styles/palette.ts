export type PaletteColor = keyof typeof palette;

export const colors = {
  white: 'white',
  black: 'black',
  backdrop: '#00000020',

  gray0: '#F6F6F9',
  gray1: '#EEEEF2',
  gray2: '#DBDADF',
  gray3: '#A5A4A9',
  gray4: '#65636A',

  blue1: '#DEE9FF',
  blue2: '#8DB6F4',
  blue3: '#588CED',
  blue4: '#3866BC',

  green1: '#E4EEEC',
  green3: '#80CA9E',
  green4: '#34AA80',

  orange3: '#F19E62',

  red1: '#FFE2E1',
  red2: '#FFA6A5',
  red3: '#E96D6B',

  yellow3: '#FDD478',
  yellow1: '#FFEFCC',

  purple3: '#A181FF',
};

export const theme = {
  dark: false,
  colors: {
    primary: colors.blue3,
    background: colors.white,
    card: colors.gray0,
    text: colors.black,
    border: '#d8d8d8',
    notification: colors.red3,
  },
};

export const palette = {
  ...theme.colors,
  ...colors,
};
