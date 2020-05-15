import React from 'react';
import {View, Image, FlatList, ActivityIndicator} from 'react-native';
import {Text, Button} from 'components';

import styles from './pet-menu.styles';
import propTypes from 'prop-types';

import Pet1 from 'assets/images/pets/tussy.png';
import Pet2 from 'assets/images/pets/pacho.png';
import companyLogo from 'assets/images/logo.png';

const petImg = {
  m1: Pet1,
  m2: Pet2,
};

const PetMenu = ({options, onOptionPress, isLoading}) => (
  <View style={styles.content}>
    {isLoading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text>Cargando... 🐶🐱</Text>
      </View>
    ) : (
      <FlatList
        data={options}
        renderItem={({item, index}) =>
          item == null ? (
            <View style={styles.descriptionImageContainer}>
              <Image
                source={petImg[`m${(index % 2) + 1}`]}
                style={styles.descriptionImage}
              />
            </View>
          ) : (
            <View style={styles.descriptionCard} key={index}>
              <View style={styles.descriptionImagecontainer}>
                <Image
                  source={
                    item.mascotaFotosDto[0]
                      ? {uri: item.mascotaFotosDto[0].foto}
                      : companyLogo
                  }
                  style={styles.descriptionImage}
                />
              </View>
              <View style={styles.descriptionTextContainer}>
                <Text style={styles.descriptionText}>
                  <Text bold>{item.nombre.toUpperCase()}: </Text>
                  <Text>Rescatado</Text>
                </Text>
                <Text style={styles.descriptionText}>
                  <Text bold>Edad: </Text>
                  <Text>{item.edad}</Text>
                </Text>
                <Text style={styles.descriptionText}>
                  <Text bold>Raza: </Text>
                  <Text>{item.raza}</Text>
                </Text>
                <Text style={styles.descriptionText}>
                  <Text bold>Sexo: </Text>
                  <Text>{item.sexo ? 'Hembra' : 'Macho'}</Text>
                </Text>
                <Button
                  onPress={() => onOptionPress(item.id)}
                  style={styles.petButton}
                  label="Ver más"
                  textColor="white"
                  small
                />
              </View>
            </View>
          )
        }
        keyExtractor={(_, index) => `${index}`}
      />
    )}
  </View>
);

PetMenu.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      nombre: propTypes.string.isRequired,
      id: propTypes.isRequired,
    }),
  ).isRequired,
  onOptionPress: propTypes.func,
  isLoading: propTypes.bool,
};

PetMenu.defaultProps = {
  isLoading: false,
};

export default PetMenu;
