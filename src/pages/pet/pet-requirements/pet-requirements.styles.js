import {StyleSheet} from 'react-native';
import styles from '../../../styles';

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
    textAlign: 'right',
    ...styles.text,
    marginLeft: 40,
    marginTop: 15,
    marginBottom: 15,
  },
  textoizquierda: {
    marginRight: 40,
    ...styles.text,
    marginTop: 15,
    marginBottom: 15,
  },
  botonadopta: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
});