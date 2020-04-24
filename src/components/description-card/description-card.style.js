import {StyleSheet} from 'react-native';
import styles from '../../styles';

export default StyleSheet.create({
  container: {
    ...styles.flexRow,
    ...styles.alignItemsCenter,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 20,
  },
  descriptionText: {
    ...styles.h4,
    ...styles.m0,
    ...styles.flexOne,
    marginLeft: 10,
  },
});
