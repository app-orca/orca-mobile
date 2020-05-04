import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HeaderNav, StepperView} from '../../components';
import PetMenu from './pet-menu/pet-menu';
import PetDescription from './pet-description/pet-description';

import styles from './pet.styles';

const petOptions = [
  {label: 'Mascota 1', value: 'm1'},
  {label: 'Mascota 2', value: 'm2'},
];

const Pet = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPet, setSelectedPet] = useState(petOptions[0]);

  const handleGoHomePress = () => navigation.popToTop();

  const handleGoBack = () => setCurrentIndex(currentIndex - 1);

  const handleOptionPress = value => {
    setSelectedPet(petOptions.find(pet => pet.value === value));
    setCurrentIndex(1);
  };

  const handlePetPress = () => setCurrentIndex(2);

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav
        onBackPress={currentIndex > 0 ? handleGoBack : null}
        onGoHomePress={handleGoHomePress}
        title="Mascotas"
      />
      <StepperView style={styles.wrapper} {...{currentIndex}}>
        <PetMenu onOptionPress={handleOptionPress} options={petOptions} />
        <PetDescription onPetPress={handlePetPress} pet={selectedPet} />
      </StepperView>
    </SafeAreaView>
  );
};

export default Pet;
