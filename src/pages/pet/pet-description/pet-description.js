import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Text, Button} from '../../../components';
import Swiper from 'react-native-swiper';

import styles from './pet-description.styles';
import propTypes from 'prop-types';

import RightArrow from '../../../assets/images/flecha-der.png';
import LeftArrow from '../../../assets/images/flecha-izq.png';

import img1 from '../../../assets/images/pets/tussy-interno-1.png';
import img2 from '../../../assets/images/pets/tussy-interno-2.png';

const PetDescription = ({pet, onPetPress}) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.swiperContainer}>
          <Swiper loop showsButtons>
            <View>
              <Image source={img1} style={styles.image} />
            </View>
            <View>
              <Image source={img2} style={styles.image} />
            </View>
          </Swiper>
        </View>
        <View style={styles.descriptionTextContainer}>
          <Text style={styles.descriptionText}>
            <Text bold>{pet.name.toUpperCase()}</Text>
          </Text>
          <Text style={styles.descriptionText}>
            <Text>{pet.description}</Text>
          </Text>
          <Text style={styles.descriptionText}>
            <Text bold>Edad: </Text>
            <Text>{pet.age}</Text>
          </Text>
          <Text style={styles.descriptionText}>
            <Text bold>Raza: </Text>
            <Text>{pet.breed}</Text>
          </Text>
          <Text style={styles.descriptionText}>
            <Text bold>Sexo: </Text>
            <Text>{pet.gender}</Text>
          </Text>
        </View>
        <Button
          onPress={onPetPress}
          style={styles.requirementsButton}
          label="Requisitos"
          textColor="white"
        />
        <Button
          onPress={onPetPress}
          style={styles.adoptButton}
          label="Adopta"
          textColor="white"
        />
      </ScrollView>
    </View>
  );
};

PetDescription.propTypes = {
  pet: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
  }),
  onPetPress: propTypes.func,
};

PetDescription.defaultProps = {
  onPetPress: () => null,
};

export default PetDescription;
