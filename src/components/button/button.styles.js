import {StyleSheet} from 'react-native';
import styles from '../../styles';

export default StyleSheet.create({
  buttonContainer: {
    ...styles.bgPrimary,
    ...styles.shadowS,
    ...styles.centerItems,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  buttonText: {
    ...styles.bold,
    fontSize: 16,
  },
});
