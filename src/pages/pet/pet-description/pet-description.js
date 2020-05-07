import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text, Button} from '../../../components';

import styles from './pet-description.styles';
import propTypes from 'prop-types';

const PetDescription = ({pet, onPetPress}) => (
  <View style={styles.wrapper}>
    <Text style={styles.descriptionTitle} h2>
      {pet.name}
    </Text>
  </View>
);

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
