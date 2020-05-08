import {StyleSheet} from 'react-native';
import {colors} from 'services/ui';
import styles from 'styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
  },
  headerImage: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  tipContainer: {
    ...styles.flexRow,
    marginHorizontal: 10,
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: colors.primary.withAlpha(0.5).toString(),
  },
  tipIndex: {
    fontSize: 35,
    marginRight: 20,
    color: colors.purpleLight.toString(),
  },
  descriptionText: {
    ...styles.flexOne,
  },
});
