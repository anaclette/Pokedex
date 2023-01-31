import {s as RNScale, vs as RNVerticalScale} from 'react-native-size-matters';
import {height} from '../common/constants';

const scale = (size: number) => RNScale(size);
const scaleVertical = (size: number) => RNVerticalScale(size);

const HEIGHT_CUT_OFF = 600;
const scaledFontSize = (size: number) =>
  height > HEIGHT_CUT_OFF ? size : size * (height / (HEIGHT_CUT_OFF * 1.1));

export default {
  scaledFontSize,
  scale,
  scaleVertical,
};
