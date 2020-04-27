import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HeaderNav, StepperView} from '../../components';
import DonationsMenu from './donations-menu/donations-menu';
import DonationDescription from './donation-description/donation-description';
import Donate from './donate/donate';

import styles from './donations.styles';

const donationOptions = [
  {label: 'Plan alcancía', value: 'ALCANCIA'},
  {label: 'Plan padrino', value: 'PADRINO'},
  {label: 'Donación Única', value: 'UNICA'},
  {label: 'Donación empresarial', value: 'EMPRESARIAL'},
];

const Donations = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDonation, setSelecteDonation] = useState(donationOptions[0]);

  const handleGoHomePress = () => navigation.popToTop();

  const handleGoBack = () => setCurrentIndex(currentIndex - 1);

  const handleOptionPress = value => {
    setSelecteDonation(
      donationOptions.find(donation => donation.value === value),
    );

    setCurrentIndex(1);
  };

  const handleDonatePress = () => setCurrentIndex(2);

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
        <DonationDescription
          onDonatePress={handleDonatePress}
          donation={selectedDonation}
        />
        <Donate />
      </StepperView>
    </SafeAreaView>
  );
};

export default Donations;
