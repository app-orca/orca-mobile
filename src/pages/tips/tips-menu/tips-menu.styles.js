import {StyleSheet} from 'react-native';
import {colors} from '../../../services/ui';
import styles from '../../../styles';

export default StyleSheet.create({
  optionsWrapper: {
    ...styles.flexOne,
    ...styles.alignItemsStretch,
    ...styles.justifyAround,
  },
  optionCard: {
    ...styles.flexRow,
    ...styles.alignItemsCenter,
    ...styles.justifyEnd,
    paddingVertical: 70,
    paddingHorizontal: 30,
    overflow: 'hidden',
    backgroundColor: colors.primary.withAlpha(0.5).toString(),
    borderRadius: 30,
    marginHorizontal: 30,
  },
  optionCardImage: {
    transform: [{scale: 1.2}, {translateX: -20}],
  },
  imageContainer: {
    ...StyleSheet.absoluteFill,
  },
  cardText: {
    letterSpacing: 1.2,
    fontSize: 18,
  },
});
