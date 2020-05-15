import {StyleSheet} from 'react-native';

import styles from 'styles';
import {colors} from 'services/ui';

export default StyleSheet.create({
  content: {
    ...styles.flexOne,
  },
  descriptionCard: {
    ...styles.flexOne,
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.alignItemsCenter,
    backgroundColor: colors.primary.withAlpha(0.5).toString(),
    borderRadius: 30,
    marginHorizontal: 30,
    marginBottom: 20,
    overflow: 'hidden',
  },
  descriptionImagecontainer: {
    height: '100%',
    width: 120,
  },
  descriptionImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  descriptionTextContainer: {
    ...styles.flexOne,
    padding: 20,
  },
  descriptionText: {
    letterSpacing: 1,
    textAlign: 'left',
  },
  petButton: {
    ...styles.bgLightPurple,
    marginVertical: 10,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  loadingContainer: {
    ...styles.alignItemsCenter,
    marginTop: 10,
  },
});
