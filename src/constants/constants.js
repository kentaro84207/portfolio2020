const breakpoints = [576, 768, 992, 1200]
export const desktop = `@media (min-width: ${breakpoints[2]}px)`
export const mobile = `@media (max-width: ${breakpoints[2] - 1}px)`
export const tablet = `@media (min-width: ${breakpoints[0]}px) and (max-width: ${breakpoints[2] - 1}px)`
export const sp = `@media (max-width: ${breakpoints[0] - 1}px)`

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
