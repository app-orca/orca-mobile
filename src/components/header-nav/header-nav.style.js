import {StyleSheet} from 'react-native';
import styles from '../../styles';

export default StyleSheet.create({
  container: {
    ...styles.alignItemsCenter,
    position: 'relative',
    paddingVertical: 20,
  },
  navOptions: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...StyleSheet.absoluteFill,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  navTitle: {
    marginTop: 10,
    letterSpacing: 5,
  },
});
