import {StyleSheet} from 'react-native';
import styles from '../../styles';

export default StyleSheet.create({
  circle: {
    ...styles.centerItems,
    ...styles.bgPrimary,
    alignSelf: 'center',
  },
  circleText: {
    ...styles.h1,
    ...styles.m0,
    fontSize: 20,
  },
});
