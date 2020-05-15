import {StyleSheet} from 'react-native';
import styles from 'styles';
import {colors} from 'services/ui';

export default StyleSheet.create({
  container: {
    ...styles.flexOne,
  },
  requirementContainer: {
    marginBottom: 40,
  },
  numeros: {
    ...styles.title,
    ...styles.h1,
    ...styles.flexOne,
    ...styles.textCenter,
    color: colors.crimson.withAlpha(0.6).toString(),
    fontSize: 60,
  },
  logo: {
    alignSelf: 'center',
    width: '70%',
    marginBottom: 40,
    marginTop: 15,
  },
  legContainer: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.alignItemsCenter,
  },
  legContainerInverse: {
    ...styles.flexRowReverse,
  },
  requirementText: {
    marginTop: 30,
    paddingHorizontal: 20,
    letterSpacing: 2,
    lineHeight: 30,
    width: '100%',
  },
  requirementTextRight: {
    textAlign: 'right',
  },
  adoptButton: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
});
