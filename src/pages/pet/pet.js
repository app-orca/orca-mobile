import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderNav, StepperView} from 'components';
import PetMenu from './pet-menu/pet-menu';
import PetAdopt from './pet-adopt/pet-adopt';
import PetDescription from './pet-description/pet-description';
import PetRequirements from './pet-requirements/pet-requirements';

import styles from './pet.styles';

import {petsService} from 'services/api';

const Pet = ({route, navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [petOptions, setPetOptions] = useState([]);
  const [selectedPet, setSelectedPet] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // get passed pet type on params
  const {type} = route.params;

  useEffect(() => {
    setIsLoading(true);
    petsService.getPetByType(type).then(data => {
      setPetOptions(data);
      setIsLoading(false);
    });
  }, [type]);

  const handleGoHomePress = () => navigation.popToTop();

  const handleGoBack = () => setCurrentIndex(currentIndex - 1);

  const handleOptionPress = id => {
    const found = petOptions.find(pet => pet.id === id);
    setIsLoading(true);
    setSelectedPet(found);

    petsService.getPetInfo(id).then(data => {
      setSelectedPet(data[0]);
      console.log(data);
      setIsLoading(false);
    });
    setCurrentIndex(1);
  };

  const handlePetPress = () => setCurrentIndex(2);

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav
        onBackPress={currentIndex > 0 ? handleGoBack : null}
        onLogoPress={handleGoHomePress}
        title="Mascotas"
      />
      <StepperView style={styles.wrapper} {...{currentIndex}}>
        <PetMenu
          {...{isLoading}}
          onOptionPress={handleOptionPress}
          options={petOptions}
        />
        <PetDescription
          {...{isLoading}}
          onPetPress={handlePetPress}
          pet={selectedPet}
        />
        <PetRequirements />
        <PetAdopt />
      </StepperView>
    </SafeAreaView>
  );
};

export default Pet;
