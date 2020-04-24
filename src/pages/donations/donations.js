import React from 'react';
import {View} from 'react-native';
import {DescriptionCard, CircleAvatar, Text} from '../../components';

import styles from './donations.styles';

const donationOptions = [
  {label: 'Plan alcancía'},
  {label: 'Plan padrino'},
  {label: 'Donación Única'},
  {label: 'Donación empresarial'},
];

const Donations = () => (
  <View>
    <View style={styles.headerContainer}>
      <CircleAvatar size={100} label="ORCA" />
      <Text style={styles.headerTitle} h1>
        Donaciones
      </Text>
    </View>
    {donationOptions.map(donationOption => (
      <DescriptionCard
        style={styles.descriptionCard}
        label={donationOption.label.toUpperCase()}
      />
    ))}
  </View>
);

export default Donations;
