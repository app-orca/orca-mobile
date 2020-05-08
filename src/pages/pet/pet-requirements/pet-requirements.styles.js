import {StyleSheet} from 'react-native';
import styles from 'styles';

export default StyleSheet.create({
  container: {
    ...styles.flexOne,
  },
  numeros: {
    ...styles.title,
    ...styles.h1,
    color: '#ff85a8',
    fontSize: 60,
    ...styles.numberMargin,
    padding: 10,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 15,
  },

  pataizquierda: {
    justifyContent: 'flex-start',
    ...styles.flexOne,
    flexDirection: 'row',
  },
  pataderecha: {
    justifyContent: 'flex-end',
    ...styles.flexOne,
    flexDirection: 'row',
  },
  textoderecha: {
    ...styles.text,
    textAlign: 'right',
    marginLeft: 40,
    marginRight: 25,
    marginTop: 15,
    marginBottom: 15,
  },
  textoizquierda: {
    ...styles.text,
    marginLeft: 25,
    marginRight: 40,
    marginTop: 15,
    marginBottom: 15,
  },
  adoptButton: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
});
