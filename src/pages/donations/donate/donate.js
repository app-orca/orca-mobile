import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '../../../components';

import styles from './donate.styles';

import PayULogo from 'assets/images/payu-logo.svg';

const Donate = () => (
  <View style={styles.wrapper}>
    <View style={styles.descriptionContainer}>
      <PayULogo style={styles.descriptionImage} height="60" />
      <Text style={styles.descriptionText}>
        Si le das click al botón de donar serás redireccionado a la plataforma
        de PayU para realizar el pago por medio de la forma de pago más
        conveniente para ti. {'\n\n'} Al terminar serás redireccionado a esta
        app
      </Text>
    </View>
    <Button
      textColor="white"
      style={[styles.donationButton, styles.donateButton]}
      label="DONAR"
    />
    <Button
      textColor="white"
      style={[styles.donationButton, styles.cancelButton]}
      label="CANCELAR"
    />
  </View>
);

export default Donate;
