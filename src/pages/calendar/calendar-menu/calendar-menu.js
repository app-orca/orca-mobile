import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text, Button, SocialMedia} from 'components';

import styles from './calendar-menu.styles';
import propTypes from 'prop-types';

const CalendarMenu = ({calendarData}) => (
  <ScrollView style={styles.eventsContainer}>
    <Text style={styles.calendarMonthText} black>
      {calendarData.month.toUpperCase()}
    </Text>
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
};

CalendarMenu.defaultProps = {
  calendarData: [],
};

export default CalendarMenu;
