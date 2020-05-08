import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderNav, Text, Button, SocialMedia} from 'components';

import styles from './calendar.styles';

import CalendarHeader from 'assets/images/calendar-header.svg';

const MOCKED_EVENTS = {
  month: 'Mayo',
  events: [
    {
      id: '1',
      title: 'Paseo por el parque',
      day: '3',
    },
    {
      id: '2',
      title: 'Paseo por el parque',
      day: '4',
    },
    {
      id: '3',
      title: 'Paseo por el parque',
      day: '10',
    },
    {
      id: '4',
      title: 'Paseo por el parque',
      day: '12',
    },
    {
      id: '5',
      title: 'Paseo por el parque',
      day: '22',
    },
    {
      id: '6',
      title: 'Paseo por el parque',
      day: '34',
    },
  ],
};

const Calendar = ({navigation}) => {
  const handleLogoPress = () => navigation.popToTop();

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav onLogoPress={handleLogoPress} title="Calendario" />
      <CalendarHeader style={styles.calendarHeader} height="28%" />
      <ScrollView style={styles.eventsContainer}>
        <Text style={styles.calendarMonthText} black>
          {MOCKED_EVENTS.month.toUpperCase()}
        </Text>
        {MOCKED_EVENTS.events.map((item, index) => (
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
    </SafeAreaView>
  );
};

export default Calendar;
