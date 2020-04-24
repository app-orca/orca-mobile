import {StyleSheet} from 'react-native';
import styles from '../../styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
  },
  companyLogo: {
    marginBottom: 30,
  },
  optionsContainer: {
    ...styles.flexOne,
    paddingHorizontal: 10,
  },
  optionsList: {
    ...styles.flexOne,
  },
  optionCard: {
    margin: 10,
  },
});
