import {StyleSheet} from 'react-native';
import styles from 'styles';

export default StyleSheet.create({
  container: {
    flex: 0.35,
    ...styles.m0,
    alignItems: 'center',
  },
  texto: {
    ...styles.flexOne,
    ...styles.text,
    fontSize: 18,
    letterSpacing: 5,
    marginVertical: 10,
  },
  imagen: {
    marginHorizontal: 15,
    width: 50,
    height: 50,
  },
});
