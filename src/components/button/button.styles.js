import {StyleSheet} from 'react-native';
import styles from 'styles';

export default StyleSheet.create({
  buttonContainer: {
    ...styles.bgPrimary,
    ...styles.centerItems,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  smallButtonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  buttonText: {
    ...styles.black,
    letterSpacing: 1.5,
    fontSize: 18,
  },
  smallButtonText: {
    ...styles.bold,
    fontSize: 16,
  },
});
