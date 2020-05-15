import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'components';

import styles from './donation-description.style';
import propTypes from 'prop-types';

import DonateButtonImage from 'assets/images/buttons/donate-btn.svg';

const DonationDescription = ({donation, onDonatePress}) => (
  <View style={styles.wrapper}>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.descriptionTitle} h2>
        {donation.label}
      </Text>
      <Text style={styles.descriptionText}>{donation.text}</Text>
    </ScrollView>
    <TouchableOpacity onPress={onDonatePress}>
      <DonateButtonImage width="60%" style={styles.donateButton} />
    </TouchableOpacity>
  </View>
);

DonationDescription.propTypes = {
  donation: propTypes.shape({
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    text: propTypes.string,
  }),
  onDonatePress: propTypes.func,
};

DonationDescription.defaultProps = {
  onDonatePress: () => null,
};

export default DonationDescription;
