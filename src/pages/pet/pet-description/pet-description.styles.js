import {StyleSheet} from 'react-native';
import styles from '../../../styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
    ...styles.justifyBetween,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  descriptionTitle: {
    ...styles.textCenter,
    marginVertical: 20,
  },
});
