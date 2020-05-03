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

  let optionsRows = [...options];

  optionsRows = Array.from(
    {length: Math.ceil(optionsRows.length / 2)},
    (v, i) => optionsRows.slice(i * 2, i * 2 + 2),
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <CompanyLogo style={styles.companyLogo} size={130} />
      <View style={styles.optionsContainer}>
        {optionsRows.map((row, index) => (
          <View key={`row-${index}`} style={styles.optionsRow}>
            {row.map((option, itemIndex) => (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => handleOptionPress(option.screen)}
                style={styles.option}
                key={itemIndex}>
                {React.createElement(option.component, {
                  height: '100%',
                })}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;
