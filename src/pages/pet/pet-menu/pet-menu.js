import React from 'react';
import {View, Image, FlatList} from 'react-native';
import {Text, Button} from 'components';

import styles from './pet-menu.styles';
import propTypes from 'prop-types';

import Pet1 from 'assets/images/pets/tussy.png';
import Pet2 from 'assets/images/pets/pacho.png';

const petImg = {
  m1: Pet1,
  m2: Pet2,
};

const PetMenu = ({options, onOptionPress}) => (
  <View style={styles.content}>
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
                source={petImg[`m${(index % 2) + 1}`]}
                style={styles.descriptionImage}
              />
            </View>
            <View style={styles.descriptionTextContainer}>
              <Text style={styles.descriptionText}>
                <Text bold>{item.name.toUpperCase()}: </Text>
                <Text>Rescatado</Text>
              </Text>
              <Text style={styles.descriptionText}>
                <Text bold>Edad: </Text>
                <Text>{item.age}</Text>
              </Text>
              <Text style={styles.descriptionText}>
                <Text bold>Raza: </Text>
                <Text>{item.breed}</Text>
              </Text>
              <Text style={styles.descriptionText}>
                <Text bold>Sexo: </Text>
                <Text>{item.gender}</Text>
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
  </View>
);

PetMenu.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
  onOptionPress: propTypes.func,
};

export default PetMenu;
