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
    backgroundColor: colors.primary.withAlpha(0.55).toString(),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsList: {
    ...styles.flexOne,
  },
  optionCard: {
    ...styles.flexOne,
    margin: 10,
  },
});
