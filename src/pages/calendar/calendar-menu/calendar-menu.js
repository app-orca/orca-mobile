import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text, Button, SocialMedia} from 'components';

import styles from './calendar-menu.styles';
import propTypes from 'prop-types';

import CalendarHeader from 'assets/images/calendar-header.svg';

const CalendarMenu = ({calendarData, onItemPress}) => (
  <ScrollView style={styles.eventsContainer}>
    <CalendarHeader width="70%" style={styles.headerImage} />

    <Text style={styles.calendarMonthText} black>
      {calendarData.month.toUpperCase()}
    </Text>

    <View style={styles.container}>
      {calendarData.events.map((item, index) => (
        <View
          style={[
            styles.eventContainer,
            index % 2 && styles.eventContainerInverse,
          ]}
          key={item.id}>
          <View
            style={[
              styles.eventDescriptionContainer,
              index % 2
                ? styles.eventDescriptionContainerRight
                : styles.eventDescriptionContainerLeft,
            ]}>
            <Text style={styles.eventDesctiptionText}>{item.title}</Text>
            <Button
              label="Ver más"
              style={styles.showMoreButton}
              onPress={() => onItemPress(item.id)}
              textColor="white"
              small
            />
          </View>
          <Text style={styles.dayText} black>
            {item.day}
          </Text>
        </View>
      ))}
      <SocialMedia />
    </View>
  </ScrollView>
);

CalendarMenu.propTypes = {
  calendarData: propTypes.shape({
    month: propTypes.string.isRequired,
    events: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        day: propTypes.string.isRequired,
      }),
    ).isRequired,
  }),
  onItemPress: propTypes.func,
};

CalendarMenu.defaultProps = {
  calendarData: [],
  onItemPress: () => null,
};

export default CalendarMenu;
