import {StyleSheet} from 'react-native';

import styles from '../../../styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
  },
  option: {
    ...styles.flexOne,
    ...styles.centerItems,
    width: 165,
    height: 165,
    margin: 20,
    borderRadius: 40,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  image: {
    ...styles.flexOne,
    resizeMode: 'cover',
    width: 165,
    height: 165,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  textNameContainer: {
    ...styles.bgPrimary,
    width: 165,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    alignItems: 'center',
    padding: 3,
  },
  textName: {
    letterSpacing: 2,
  },
});
