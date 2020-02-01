const breakPoint = '991px';
export const mobile = `@media (max-width: ${breakPoint})`

const scandinavian = {
  red: '#f7a98f',
  green: '#b4d2ae',
  blue: '#c9d9e2',
  darkBlue: '#7894a3',
  purple: '#e5deeb',
  beige: '#ebe5de',
  white: '#f9f9f9'
};

const primaryColor = scandinavian.blue;
const secondaryColor = scandinavian.green;
const accentColor = scandinavian.red;
const baseColor = scandinavian.beige;
const loadColor = scandinavian.darkBlue;
const whiteColor = scandinavian.white;
export const colors = {
  primaryColor,
  secondaryColor,
  accentColor,
  baseColor,
  loadColor,
  whiteColor
};
