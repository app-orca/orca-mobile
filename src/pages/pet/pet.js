import React from 'react';
import {View, Text} from 'react-native';
import {OptionCard} from '../../components';

const Pet = ({navigation}) => (
  <View>
    <Text>Pet works!</Text>
    <OptionCard
      title="ver mas"
      onPress={() => navigation.navigate('DescriptionPet')}
    />
  </View>
);

export default Pet;
