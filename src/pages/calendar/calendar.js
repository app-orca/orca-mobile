import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderNav, StepperView} from 'components';
import CalendarMenu from './calendar-menu/calendar-menu';

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
      <StepperView>
        <CalendarMenu calendarData={MOCKED_EVENTS} />
      </StepperView>
    </SafeAreaView>
  );
};

export default Calendar;
