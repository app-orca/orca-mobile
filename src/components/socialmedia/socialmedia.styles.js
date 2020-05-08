import {StyleSheet} from 'react-native';
import styles from 'styles';

export default StyleSheet.create({
  container: {
    ...styles.alignItemsStretch,
    width: '100%',
    alignSelf: 'stretch',
    paddingVertical: 10,
  },
  texto: {
    ...styles.flexOne,
    ...styles.text,
    ...styles.textCenter,
    fontSize: 18,
    letterSpacing: 5,
    marginBottom: 5,
  },
  imagen: {
    width: 50,
    height: 50,
  },
  socialMediaContainer: {
    ...styles.flexRow,
    ...styles.justifyAround,
    width: '80%',
    alignSelf: 'center',
  },
});
