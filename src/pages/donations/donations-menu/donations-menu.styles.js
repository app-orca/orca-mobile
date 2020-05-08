import {StyleSheet} from 'react-native';

import styles from 'styles';
import {colors} from 'services/ui';

export default StyleSheet.create({
  content: {
    ...styles.flexOne,
  },
  descriptionCard: {
    ...styles.justifyCenter,
    ...styles.alignItemsEnd,
    backgroundColor: colors.primary.withAlpha(0.5).toString(),
    flex: 1,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginHorizontal: 30,
    marginBottom: 20,
    overflow: 'hidden',
  },
  descriptionImageContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  descriptionImage: {
    transform: [{translateX: -40}, {scale: 1.6}],
  },
  descriptionText: {
    letterSpacing: 2.2,
    width: '70%',
    textAlign: 'right',
  },
});
