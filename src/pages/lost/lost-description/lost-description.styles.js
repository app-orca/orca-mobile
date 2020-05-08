import { StyleSheet } from 'react-native';
import styles from '../../../styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
    ...styles.alignItemsStretch,
  },
  descriptionTextContainer: {
    ...styles.bgLightPurple,
    borderRadius: 40,
    padding: 20,
    marginHorizontal: 30,
    alignContent: 'center',
  },
  descriptionTitle: {
    ...styles.textCenter,
    letterSpacing: 2.2,
    fontSize: 25,
  },
  imageContainer: {
    ...styles.flexOne,
    alignSelf: 'center',
    borderRadius: 40,
    marginHorizontal: 30,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
