import {StyleSheet} from 'react-native';

import styles from '../../../styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
  },
  option: {
    ...styles.flexOne,
    ...styles.centerItems,
    width: 152,
    height: 152,
    margin: 30,
    borderRadius: 40,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  image: {
    ...styles.flexOne,
    resizeMode: 'cover',
    width: 152,
    height: 152,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  textNameContainer: {
    ...styles.bgPrimary,
    width: 152,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    alignItems: 'center',
    padding: 3,
  },
  textName: {
    letterSpacing: 2,
  },
});
