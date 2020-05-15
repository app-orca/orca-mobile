import {StyleSheet} from 'react-native';
import styles from 'styles';

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
  descriptionText: {
    letterSpacing: 1,
    textAlign: 'left',
  },
  requirementsButton: {
    ...styles.bgPrimary,
    marginVertical: 15,
    alignSelf: 'center',
  },
  adoptButtonContainer: {
    width: '100%',
  },
  adoptButton: {
    alignSelf: 'center',
  },
  swiperContainer: {
    ...styles.flexOne,
    alignSelf: 'center',
    borderRadius: 40,
    marginHorizontal: 30,
    marginBottom: 20,
    overflow: 'hidden',
    height: 180,
  },
  image: {
    width: '100%',
  },
});
