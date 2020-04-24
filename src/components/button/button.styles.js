import {StyleSheet} from 'react-native';
import styles from '../../styles';

export default StyleSheet.create({
  buttonContainer: {
    ...styles.bgPrimary,
    ...styles.shadowS,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  buttonText: {
    ...styles.text,
    ...styles.textWhite,
  },
});
