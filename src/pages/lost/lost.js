import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HeaderNav, StepperView} from '../../components';
import LostMenu from './lost-menu/lost-menu';
import LostDescription from './lost-description/lost-description';

import styles from './lost.styles';

import Bruno from '../../assets/images/lost/perdidos-interno-bruno.png';
import Doki from '../../assets/images/lost/perdidos-interno-doki.png';
import Itzhy from '../../assets/images/lost/perdidos-interno-itzhy.png';
import Michi from '../../assets/images/lost/perdidos-interno-michi.png';

const lostOptions = [
  {
    name: 'Bruno',
    phone: '3458296589',
    city: 'Bogotá',
    src: Bruno,
    id: 'p1',
  },
  {
    name: 'Doki',
    phone: '3458296589',
    city: 'Medellín',
    src: Doki,
    id: 'p2',
  },
  {
    name: 'Itzhy',
    phone: '3458296589',
    city: 'Bogotá',
    src: Itzhy,
    id: 'p3',
  },
  {
    name: 'Michi',
    phone: '3458296589',
    city: 'Bogotá',
    src: Michi,
    id: 'p4',
  },
];

const Lost = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLost, setSelectedLost] = useState(lostOptions[0]);

  const handleGoHomePress = () => navigation.popToTop();

  const handleGoBack = () => setCurrentIndex(currentIndex - 1);

  const handleOptionPress = id => {
    setSelectedLost(lostOptions.find(lost => lost.id === id));
    setCurrentIndex(1);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav
        onBackPress={currentIndex > 0 ? handleGoBack : null}
        onGoHomePress={handleGoHomePress}
        title="Perdidos"
      />
      <StepperView style={styles.wrapper} {...{currentIndex}}>
        <LostMenu onOptionPress={handleOptionPress} options={lostOptions} />
        <LostDescription lost={selectedLost} />
      </StepperView>
    </SafeAreaView>
  );
};

export default Lost;
