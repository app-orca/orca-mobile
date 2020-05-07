import {StyleSheet} from 'react-native';
import styles from '../../../styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
    ...styles.justifyBetween,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
