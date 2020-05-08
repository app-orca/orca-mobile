import {StyleSheet} from 'react-native';
import {colors} from '../../services/ui';
import styles from 'styles';

export default StyleSheet.create({
  container: {
    ...styles.flexOne,
  },
  containertext: {
    ...styles.flexOne,
    backgroundColor: colors.primary.withAlpha(0.55).toString(),
    borderRadius: 20,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  texto: {
    ...styles.flexOne,
    ...styles.text,
    ...styles.textCenter,
    ...styles.marginText,
  },
});
