import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HeaderNav, StepperView} from '../../components';
import PetMenu from './pet-menu/pet-menu';
import PetDescription from './pet-description/pet-description';

import styles from './pet.styles';

const petOptions = [
  {
    name: 'Mascota 1',
    description: 'soy un gato',
    age: 2,
    breed: 'gato :v',
    gender: 'macho',
    type: 'gato',
    leukemia: 'negativo',
    sida: 'negativo',
    id: 'm1',
  },
  {
    name: 'Mascota 2',
    description: 'soy un perro',
    age: 2,
    breed: 'perro :v',
    gender: 'hembra',
    type: 'perro',
    leukemia: 'negativo',
    sida: 'negativo',
    id: 'm2',
  },
];

const Pet = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPet, setSelectedPet] = useState(petOptions[0]);

  const handleGoHomePress = () => navigation.popToTop();

  const handleGoBack = () => setCurrentIndex(currentIndex - 1);

  const handleOptionPress = id => {
    setSelectedPet(petOptions.find(pet => pet.id === id));
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
