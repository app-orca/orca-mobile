import {StyleSheet} from 'react-native';
import {colors} from 'services/ui';
import styles from 'styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.justifyAround,
    flex: 1,
  },
  descriptionImage: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  descriptionContainer: {
    backgroundColor: colors.cornFlowerLight.toString(),
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 30,
  },
  descriptionText: {
    textAlign: 'center',
  },
  donationButton: {
    alignSelf: 'center',
  },
  donateButton: {
    ...styles.bgLightPurpe,
  },
  cancelButton: {
    ...styles.bgCrimson,
  },
});
