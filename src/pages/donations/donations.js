import React from 'react';
import {View, FlatList} from 'react-native';
import {DescriptionCard, CircleAvatar, Text} from '../../components';

import styles from './donations.styles';

const donationOptions = [
  {label: 'Plan alcancía'},
  {label: 'Plan padrino'},
  {label: 'Donación Única'},
  {label: 'Donación empresarial'},
];

const Donations = () => (
  <View style={styles.wrapper}>
    <View style={styles.headerContainer}>
      <CircleAvatar size={100} label="ORCA" />
      <Text style={styles.headerTitle} h1>
        Donaciones
      </Text>
    </View>
    <FlatList
      style={styles.content}
      data={donationOptions}
      renderItem={({item}) => (
        <DescriptionCard
          style={styles.descriptionCard}
          label={item.label.toUpperCase()}
        />
      )}
      keyExtractor={(_, index) => `${index}`}
    />
  </View>
);

export default Donations;
