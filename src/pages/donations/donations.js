import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderNav} from '../../components';
import DonationsMenu from './donations-menu/donations-menu';

import styles from './donations.styles';

const donationOptions = [
  {label: 'Plan alcancía', value: 'ALCANCIA'},
  {label: 'Plan padrino', value: 'PADRINO'},
  {label: 'Donación Única', value: 'UNICA'},
  {label: 'Donación empresarial', value: 'EMPRESARIAL'},
];

const Donations = ({navigation}) => {
  const handleGoHomePress = () => navigation.popToTop();

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav onGoHomePress={handleGoHomePress} title="Donaciones" />
      <DonationsMenu options={donationOptions} />
    </SafeAreaView>
  );
};

export default Donations;
