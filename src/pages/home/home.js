import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CompanyLogo} from '../../components';

import styles from './home.styles';

import CatsIcon from '../../assets/images/menu/felinos.svg';
import CansIcon from '../../assets/images/menu/caninos.svg';
import DonationsIcon from '../../assets/images/menu/donaciones.svg';
import LostPetsIcon from '../../assets/images/menu/perdidos.svg';
import TipsIcon from '../../assets/images/menu/tips.svg';
import CalendarIcon from '../../assets/images/menu/tips.svg';

const options = [
  {
    screen: 'Pet',
    label: 'Felinos',
    component: CatsIcon,
  },
  {
    screen: 'Pet',
    label: 'Caninos',
    component: CansIcon,
  },
  {
    screen: 'Tips',
    label: 'Tips',
    component: TipsIcon,
  },
  {
    screen: 'Donations',
    label: 'Donaciones',
    component: DonationsIcon,
  },
  {
    screen: 'Lost',
    label: 'Perdidos',
    component: LostPetsIcon,
  },
  {
    screen: 'Calendar',
    label: 'Calendario',
    component: CalendarIcon,
  },
];

const Home = ({navigation}) => {
  const handleOptionPress = screen => navigation.navigate(screen);

  return (
    <SafeAreaView style={styles.wrapper}>
      <CompanyLogo style={styles.companyLogo} size={130} />
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            onPress={() => handleOptionPress(option.screen)}
            style={styles.menuElement}
            key={index}>
            {React.createElement(option.component)}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;
