import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';

import styles from './donations-menu.styles';
import propTypes from 'prop-types';

import UniqueDonationHeader from '../../../assets/images/donations/donate-unique.svg';
import PiggyBankDonationHeader from '../../../assets/images/donations/donate-piggy-bank.svg';
import SponsorDonationHeader from '../../../assets/images/donations/donate-sponsor.svg';
import CompanyDonationHeader from '../../../assets/images/donations/donate-company.svg';

/*
<DescriptionCard
  onPress={onOptionPress}
  style={styles.descriptionCard}
  label={item.label.toUpperCase()}
  value={item.value}
/>
*/

const DONATION_HEADERS = {
  ALCANCIA: PiggyBankDonationHeader,
  PADRINO: SponsorDonationHeader,
  UNICA: UniqueDonationHeader,
  EMPRESARIAL: CompanyDonationHeader,
};

const DonationsMenu = ({options, onOptionPress}) => (
  <View style={styles.content}>
    {options.map((option, index) => (
      <TouchableOpacity
        onPress={() => onOptionPress(option.value)}
        key={`${index}`}
        style={styles.descriptionCard}>
        <View style={styles.descriptionImageContainer}>
          {React.createElement(DONATION_HEADERS[option.value], {
            style: styles.descriptionImage,
            width: 150,
            height: '100%',
          })}
        </View>
        <Text style={styles.descriptionText}>{option.label.toUpperCase()}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

DonationsMenu.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      value: propTypes.string.isRequired,
    }),
  ).isRequired,
  onOptionPress: propTypes.func,
};

export default DonationsMenu;
