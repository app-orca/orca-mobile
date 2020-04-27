import {StyleSheet} from 'react-native';
import styles from '../../../styles';

export default StyleSheet.create({
  tipContainer: {
    ...styles.flexRow,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 219, 18, 0.5)',
  },
  tipIndex: {
    fontSize: 35,
    paddingHorizontal: 20,
    color: '#8985f2',
  },
});
