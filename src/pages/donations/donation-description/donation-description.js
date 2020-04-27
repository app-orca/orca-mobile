import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '../../../components';

import styles from './donation-description.style';
import propTypes from 'prop-types';

const DonationDescription = ({donation, onDonatePress}) => (
  <View style={styles.wrapper}>
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionTitle} h2>
        {donation.label}
      </Text>
      <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet</Text>
    </View>
    <Button onPress={onDonatePress} style={styles.donateButton} label="Donar" />
  </View>
);

DonationDescription.propTypes = {
  donation: propTypes.shape({
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
  }),
  onDonatePress: propTypes.func,
};

DonationDescription.defaultProps = {
  onDonatePress: () => null,
};

export default DonationDescription;
