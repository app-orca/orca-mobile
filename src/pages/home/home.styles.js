import {StyleSheet} from 'react-native';
import styles from '../../styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
    padding: 20,
  },
  optionsList: {
    flex: 1,
  },
  optionCard: {
    margin: 10,
  },
});
