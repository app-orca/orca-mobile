import React from 'react';
import {View} from 'react-native';
import {DescriptionCard, CircleAvatar, Text} from '../../components';

import styles from './donations.styles';

const Donations = () => (
  <View>
    <View style={styles.headerContainer}>
      <CircleAvatar size={100} label="ORCA" />
      <Text style={styles.headerTitle} h1>
        Donaciones
      </Text>
    </View>
    <DescriptionCard style={styles.descriptionCard} label="PLAN ALCANCÍA" />
    <DescriptionCard style={styles.descriptionCard} label="PLAN PADRINO" />
    <DescriptionCard style={styles.descriptionCard} label="DONACIÓN ÚNICA" />
    <DescriptionCard
      style={styles.descriptionCard}
      label="DONACIÓN EMPRESARIAL"
    />
  </View>
);

export default Donations;
