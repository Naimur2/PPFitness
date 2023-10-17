const increaseDecrease = 0;

export const fontSizes = {
  '3xs': 8 + increaseDecrease,
  '2xs': 10 + increaseDecrease,
  xs: 12 + increaseDecrease,
  sm: 14 + increaseDecrease,
  md: 16 + increaseDecrease,
  lg: 18 + increaseDecrease,
  xl: 20 + increaseDecrease,
  '2xl': 24 + increaseDecrease,
  '2xxl': 26 + increaseDecrease,
  '3xl': 30 + increaseDecrease,
  '4xl': 36 + increaseDecrease,
  '5xl': 48 + increaseDecrease,
  '6xl': 60 + increaseDecrease,
  '7xl': 72 + increaseDecrease,
  '8xl': 96 + increaseDecrease,
  '9xl': 128 + increaseDecrease,
};

export const letterSpacings = {
  xs: '-0.05em',
  sm: '-0.025em',
  md: 0,
  lg: '0.025em',
  xl: '0.05em',
  '2xl': '0.1em',
};

export const lineHeights = {
  '2xs': '1em',
  xs: '1.125em',
  sm: '1.25em',
  md: '1.375em',
  lg: '1.5em',
  xl: '1.75em',
  '2xl': '2em',
  '3xl': '2.5em',
  '4xl': '3em',
  '5xl': '4em',
};

export const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const typography = {
  letterSpacings,
  lineHeights,
  fontWeights,
  fontSizes,
};

export default typography;
