import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '../../components';

import styles from './pet.styles';

const Pet = ({navigation}) => (
  <View style={styles.petContainer}>
    <View style={styles.img}>
      <Text>Foto del perrito/gatito</Text>
    </View>
    <View>
      <Text>Descripción</Text>
      <Button style={styles.vermasButton} label="Ver más" />
    </View>
  </View>
);

export default Pet;
