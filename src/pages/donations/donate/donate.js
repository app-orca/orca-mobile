import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Button} from 'components';

import styles from './donate.styles';
import propTypes from 'prop-types';

import PayULogo from 'assets/images/payu-logo.svg';
import DonateButtonImage from 'assets/images/buttons/donate-btn.svg';

const Donate = ({onCancelPress}) => (
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

    <TouchableOpacity>
      <DonateButtonImage width="60%" style={styles.donationButton} />
    </TouchableOpacity>
    <Button
      textColor="white"
      style={[styles.donationButton, styles.cancelButton]}
      label="CANCELAR"
      onPress={onCancelPress}
      small
    />
  </View>
);

Donate.propTypes = {
  onCancelPress: propTypes.func,
};

Donate.defaultProps = {
  onCancelPress: () => null,
};

export default Donate;
