import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DescriptionCard, HeaderNav} from '../../components';

import styles from './donations.styles';

const donationOptions = [
  {label: 'Plan alcancía'},
  {label: 'Plan padrino'},
  {label: 'Donación Única'},
  {label: 'Donación empresarial'},
];

const Donations = ({navigation}) => {
  const handleGoHomePress = () => navigation.popToTop();

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav onGoHomePress={handleGoHomePress} title="Donaciones" />
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
};

export default Donations;
