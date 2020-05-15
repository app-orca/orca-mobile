import React from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Text, Button} from 'components';
import Swiper from 'react-native-swiper';

import styles from './pet-description.styles';
import propTypes from 'prop-types';

import AdoptButtonImage from 'assets/images/buttons/adopt-btn.svg';
import logo from 'assets/images/logo.png';

const PetDescription = ({pet, onPetPress, isLoading}) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.swiperContainer}>
          <Swiper loop showsButtons>
            {pet.mascotaFotosDto[0] ? (
              pet.mascotaFotosDto.map(({foto}, index) => (
                <View key={`pet-photo-${index}`}>
                  <Image
                    source={{uri: foto}}
                    resizeMode="stretch"
                    style={styles.image}
                  />
                </View>
              ))
            ) : (
              <Image source={logo} style={styles.image} resizeMode="center" />
            )}
          </Swiper>
        </View>
        <View style={styles.descriptionTextContainer}>
          <Text style={styles.descriptionText}>
            <Text bold>{pet.nombre.toUpperCase()}</Text>
          </Text>
          <Text style={styles.descriptionText}>
            <Text>{pet.descripcion}</Text>
          </Text>
          <Text style={styles.descriptionText}>
            <Text bold>Edad: </Text>
            <Text>{pet.edad}</Text>
          </Text>
          <Text style={styles.descriptionText}>
            <Text bold>Raza: </Text>
            <Text>{pet.raza}</Text>
          </Text>
          <Text style={styles.descriptionText}>
            <Text bold>Sexo: </Text>
            <Text>{pet.sexo ? 'Hembra' : 'Macho'}</Text>
          </Text>
          {isLoading ? (
            <View style={styles.loadingIndicatorContainer}>
              <ActivityIndicator size="large" color="white" />
              <Text style={styles.loadingIndicatorText}>
                Obteniendo más información...
              </Text>
            </View>
          ) : (
            <>
              <Text style={styles.descriptionText}>
                <Text bold>Sida: </Text>
                <Text>Negativo</Text>
              </Text>
              <Text style={styles.descriptionText}>
                <Text bold>Leucemia: </Text>
                <Text>Negativo</Text>
              </Text>
            </>
          )}
        </View>
        <Button
          onPress={onPetPress}
          style={styles.requirementsButton}
          label="Requisitos"
          textColor="white"
          small
        />
        <TouchableOpacity
          style={styles.adoptButtonContainer}
          onPress={onPetPress}>
          <AdoptButtonImage width="60%" style={styles.adoptButton} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

PetDescription.propTypes = {
  pet: propTypes.shape({
    name: propTypes.string,
    id: propTypes.any,
  }),
  onPetPress: propTypes.func,
  isLoading: propTypes.bool,
};

PetDescription.defaultProps = {
  onPetPress: () => null,
  isLoading: false,
};

export default PetDescription;
