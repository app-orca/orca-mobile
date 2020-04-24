import React from 'react';
import {View} from 'react-native';
import {DescriptionCard, CircleAvatar} from '../../components';

import styles from './donations.styles';

const Donations = () => (
  <View>
    <View style={styles.headerContainer}>
      <CircleAvatar label="ORCA" />
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
