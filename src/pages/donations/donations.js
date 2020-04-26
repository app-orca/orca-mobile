import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderNav, StepperView, Text} from '../../components';
import DonationsMenu from './donations-menu/donations-menu';

import styles from './donations.styles';

const donationOptions = [
  {label: 'Plan alcancía', value: 'ALCANCIA'},
  {label: 'Plan padrino', value: 'PADRINO'},
  {label: 'Donación Única', value: 'UNICA'},
  {label: 'Donación empresarial', value: 'EMPRESARIAL'},
];

const Donations = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDonation, setSelecteDonation] = useState({});

  const handleGoHomePress = () => navigation.popToTop();

  const handleGoBack = () => setCurrentIndex(currentIndex - 1);

  const handleOptionPress = value => {
    setSelecteDonation(
      donationOptions.find(donation => donation.value === value),
    );

    setCurrentIndex(1);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav
        onBackPress={currentIndex > 0 ? handleGoBack : null}
        onGoHomePress={handleGoHomePress}
        title="Donaciones"
      />
      <StepperView {...{currentIndex}}>
        <DonationsMenu
          onOptionPress={handleOptionPress}
          options={donationOptions}
        />
        <View>
          <Text>{selectedDonation.label}</Text>
        </View>
      </StepperView>
    </SafeAreaView>
  );
};

export default Donations;
