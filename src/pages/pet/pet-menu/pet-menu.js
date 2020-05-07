import React from 'react';
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import {Text, Button} from '../../../components';

import styles from './pet-menu.styles';
import propTypes from 'prop-types';

import Pet1 from '../../../assets/images/pets/gatito1.png';
import Pet2 from '../../../assets/images/pets/perrito1.png';

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
            <Image source={petImg[item.id]} style={styles.descriptionImage} />
          </View>
        ) : (
          <View style={styles.descriptionCard} key={index}>
            <View style={styles.descriptionImageContainer}>
              <Image source={petImg[item.id]} style={styles.descriptionImage} />
            </View>
            <View style={styles.descriptionTextContainer}>
              <Text style={styles.descriptionText}>
                <Text style={styles.title}>{item.name.toUpperCase()}: </Text>
                <Text>Rescatado</Text>
              </Text>
              <Text style={styles.descriptionText}>
                <Text style={styles.title}>Edad: </Text>
                <Text>{item.age}</Text>
              </Text>
              <Text style={styles.descriptionText}>
                <Text style={styles.title}>Raza: </Text>
                <Text>{item.breed}</Text>
              </Text>
              <Text style={styles.descriptionText}>
                <Text style={styles.title}>Sexo: </Text>
                <Text>{item.gender}</Text>
              </Text>
              <TouchableOpacity>
                <Button
                  onPress={() => onOptionPress(item.id)}
                  style={styles.petButton}
                  label="Ver más"
                  textColor="white"
                />
              </TouchableOpacity>
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
