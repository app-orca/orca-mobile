import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
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
  <SafeAreaView style={styles.wrapper}>
    <View style={styles.headerContainer}>
      <CircleAvatar size={80} label="ORCA" />
      <Text style={styles.headerTitle} h2>
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
  </SafeAreaView>
);

export default Donations;
