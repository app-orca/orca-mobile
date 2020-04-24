import {StyleSheet} from 'react-native';
import layoutStyles from './layout';
import shadowStyles from './shadows';
import fontStyles from './fonts';
import backgroundStyles from './backgrounds';

export default StyleSheet.create({
  ...layoutStyles,
  ...shadowStyles,
  ...fontStyles,
  ...backgroundStyles,
});
