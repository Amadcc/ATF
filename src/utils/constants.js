import {Dimensions} from 'react-native';

export const win = Dimensions.get('window');
export const W = win.width;
export const H = win.height;
export const responsive = {
  mobileSE: W > 315 && W < 341,
  mobile8: W > 342 && W < 380,
  mobile8plus: W > 381 && W < 415,
  mobileX: W > 416 && W < 455,
  tablet: W < 990 && W > 415,
};
