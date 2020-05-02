import {StyleSheet} from 'react-native';
import {colors} from '../../../services/ui';
import styles from '../../../styles';

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
    paddingVertical: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: colors.primary.withAlpha(0.5).toString(),
  },
  tipIndex: {
    fontSize: 35,
    paddingHorizontal: 20,
    color: '#8985f2',
  },
});
