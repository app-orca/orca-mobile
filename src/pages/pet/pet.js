import React from 'react';
import {View, Text} from 'react-native';
import {OptionCard} from '../../components';

const Pet = ({navigation}) => (
  <View>
    <Text>Pet works!</Text>
    <OptionCard
      onPress={() => navigation.navigate('Requeriments')}
      title="requerimientos"
    />
  </View>
);

export default Pet;
