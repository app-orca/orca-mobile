import {StyleSheet} from 'react-native';
import styles from '../../styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
  },
  optionCard: {
    margin: 10,
  },
  optionsWrapper: {
    ...styles.flexOne,
    ...styles.justifyCenter,
    ...styles.alignItemsStretch,
  },
});
