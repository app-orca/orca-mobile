import {StyleSheet} from 'react-native';
import {colors} from '../../services/ui';
import styles from '../../styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
  },
  companyLogo: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  optionsContainer: {
    ...styles.flexOne,
    ...styles.alignItemsStretch,
    backgroundColor: colors.primary.withAlpha(0.55).toString(),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  optionsRow: {
    ...styles.flexRow,
    ...styles.justifyAround,
    ...styles.flexOne,
  },
  option: {
    ...styles.flexOne,
    ...styles.centerItems,
    margin: 10,
  },
});
