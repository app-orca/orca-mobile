import {StyleSheet} from 'react-native';
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
  },
  descriptionTitle: {
    ...styles.textCenter,
    marginVertical: 20,
  },
  descriptionText: {
    letterSpacing: 1,
    textAlign: 'left',
  },
  requirementsButton: {
    ...styles.bgPrimary,
    marginVertical: 15,
    alignSelf: 'center',
  },
  adoptButton: {
    ...styles.bgLightPurple,
    marginVertical: 5,
    alignSelf: 'center',
  },
  swiperContainer: {
    ...styles.flexOne,
    ...styles.bgPrimary,
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
  controls: {
    ...StyleSheet.absoluteFillObject,
    ...styles.flexRow,
    ...styles.alignItemsCenter,
    ...styles.justifyBetween,
    paddingHorizontal: 10,
  },
});
