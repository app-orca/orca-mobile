import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HeaderNav, StepperView} from '../../components';
import LostMenu from './lost-menu/lost-menu';
import LostDescription from './lost-description/lost-description';

import styles from './lost.styles';

const lostOptions = [
  {label: 'Perdido 1', value: 'p1'},
  {label: 'Perdido 2', value: 'p2'},
];

const Lost = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLost, setSelectedLost] = useState(lostOptions[0]);

  const handleGoHomePress = () => navigation.popToTop();

  const handleGoBack = () => setCurrentIndex(currentIndex - 1);

  const handleOptionPress = value => {
    setSelectedLost(lostOptions.find(lost => lost.value === value));
    setCurrentIndex(1);
  };

  const handleLostPress = () => setCurrentIndex(2);

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav
        onBackPress={currentIndex > 0 ? handleGoBack : null}
        onGoHomePress={handleGoHomePress}
        title="Perdidos"
      />
      <StepperView style={styles.wrapper} {...{currentIndex}}>
        <LostMenu onOptionPress={handleOptionPress} options={lostOptions} />
        <LostDescription onLostPress={handleLostPress} lost={selectedLost} />
      </StepperView>
    </SafeAreaView>
  );
};

export default Lost;
