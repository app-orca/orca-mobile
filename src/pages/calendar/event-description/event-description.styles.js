import {StyleSheet} from 'react-native';

import styles from 'styles';
import {colors} from 'services/ui';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
  },
  eventDateText: {
    ...styles.textCenter,
    color: colors.purpleLight.toString(),
    fontSize: 30,
    letterSpacing: 5,
    marginBottom: 8,
  },
  descriptionContainer: {
    ...styles.flexOne,
    backgroundColor: colors.primary.withAlpha(0.5).toString(),
    marginHorizontal: 30,
    borderRadius: 30,
  },
  descriptionText: {
    ...styles.textCenter,
    padding: 20,
  },
});
