import {StyleSheet} from 'react-native';
import styles from 'styles';

export default StyleSheet.create({
  descriptionCard: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  headerContainer: {
    paddingVertical: 20,
  },
  headerTitle: {
    textAlign: 'center',
    marginTop: 20,
  },
  content: {
    ...styles.flexOne,
  },
  wrapper: {
    ...styles.flexOne,
  },
});
