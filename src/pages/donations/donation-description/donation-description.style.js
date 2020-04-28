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
  },
  descriptionContainer: {
    ...styles.flexOne,
    ...styles.bgLightCornFlower,
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  donateButton: {
    marginVertical: 15,
    alignSelf: 'center',
  },
});
