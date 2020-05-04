import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
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
    {options.map((option, index) => (
      <View key={'${index}'} style={styles.descriptionCard}>
        <View style={styles.descriptionImageContainer}>
          <Image
            source={petImg[option.value]}
            style={styles.descriptionImage}
          />
        </View>
        <Text style={styles.descriptionText}>{option.label.toUpperCase()}</Text>
        <TouchableOpacity>
          <Button
            onPress={() => onOptionPress(option.value)}
            style={styles.petButton}
            label="Ver más"
            textColor="white"
          />
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

PetMenu.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      value: propTypes.string.isRequired,
    }),
  ).isRequired,
  onOptionPress: propTypes.func,
};

export default PetMenu;
