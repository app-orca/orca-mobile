import {StyleSheet} from 'react-native';

import styles from '../../../styles';
import {colors} from '../../../services/ui';

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
    width: 140,
    height: 220,
    resizeMode: 'cover',
    transform: [{translateX: 0}, {scale: 1.2}],
  },
  descriptionTextContainer: {
    ...styles.flexOne,
    paddingHorizontal: 5,
    paddingVertical: 20,
    marginLeft: 140,
  },
  descriptionText: {
    letterSpacing: 1,
    textAlign: 'left',
  },
  title: {
    fontWeight: 'bold',
  },
  petButton: {
    ...styles.bgLightPurple,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 30,
  },
});
