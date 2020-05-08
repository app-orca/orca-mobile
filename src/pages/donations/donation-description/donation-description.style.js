import {StyleSheet} from 'react-native';
import styles from '../../../styles';

export default StyleSheet.create({
  wrapper: {
    ...styles.flexOne,
    ...styles.justifyBetween,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  descriptionTitle: {
    ...styles.textCenter,
    marginVertical: 20,
  },
  descriptionText: {
    textAlign: 'justify',
    marginBottom: 30,
  },
  descriptionContainer: {
    ...styles.flexOne,
    ...styles.bgLightCornFlower,
    borderRadius: 40,
    paddingHorizontal: 30,
  },
  donateButton: {
    ...styles.bgLightPurpe,
    marginVertical: 15,
    alignSelf: 'center',
  },
});
