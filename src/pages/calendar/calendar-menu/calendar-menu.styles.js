import {StyleSheet} from 'react-native';

import {colors} from 'services/ui';
import styles from 'styles';

const OPTIONS_BORDER_RADIUS = 200;

export default StyleSheet.create({
  eventsContainer: {
    ...styles.flexOne,
    backgroundColor: colors.primary.withAlpha(0.5).toString(),
    marginTop: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  calendarMonthText: {
    fontSize: 30,
    color: colors.purpleLight.toString(),
    letterSpacing: 2,
    textAlign: 'center',
    paddingVertical: 20,
  },
  eventContainer: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.alignItemsCenter,
    marginBottom: 20,
  },
  eventContainerInverse: {
    ...styles.flexRowReverse,
  },
  eventDescriptionContainer: {
    ...styles.alignItemsCenter,
    ...styles.flexOne,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  eventDescriptionContainerLeft: {
    borderTopRightRadius: OPTIONS_BORDER_RADIUS,
    borderBottomRightRadius: OPTIONS_BORDER_RADIUS,
  },
  eventDescriptionContainerRight: {
    borderTopLeftRadius: OPTIONS_BORDER_RADIUS,
    borderBottomLeftRadius: OPTIONS_BORDER_RADIUS,
  },
  eventDesctiptionText: {
    letterSpacing: 2,
    marginBottom: 10,
    fontSize: 18,
  },
  showMoreButton: {
    ...styles.bgLightPurple,
  },
  dayText: {
    color: colors.purpleLight.toString(),
    fontSize: 40,
    width: 80,
    textAlign: 'center',
  },
});
