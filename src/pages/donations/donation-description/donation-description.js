import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'components';

import styles from './donation-description.style';
import propTypes from 'prop-types';

import DonateButtonImage from 'assets/images/buttons/donate-btn.svg';

const MOCK_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula felis sed enim mollis, a eleifend arcu placerat. Vivamus consectetur a lorem id sagittis. Donec vel pellentesque urna. Aliquam lacus massa, sollicitudin a libero sit amet, blandit fermentum est. In cursus posuere odio, sit amet cursus sem venenatis vitae. Etiam eu cursus magna, ut consectetur tellus. In eu mauris quis ante luctus cursus in at leo. Maecenas a bibendum nunc. Pellentesque tempor velit ut eros tempus, nec hendrerit magna vestibulum. Nunc eget lectus non velit vestibulum ultricies. Donec faucibus ac sem ut aliquet. \n' +
  '\nPraesent pellentesque neque non pulvinar venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum enim lectus, imperdiet a odio vel, lobortis porta tellus. Vivamus sed lorem gravida, cursus risus nec, fermentum odio. Etiam posuere, nibh in pulvinar varius, sapien magna iaculis velit, id auctor sem neque vitae mauris. Nam tempor eu sapien quis rutrum. Nullam feugiat commodo bibendum. Maecenas vulputate pellentesque orci. Pellentesque at vehicula lacus. Duis viverra felis at lorem pellentesque molestie. Etiam sit amet pulvinar ante. Ut consectetur porttitor tortor id tincidunt. Duis at scelerisque augue. Nullam ut volutpat lorem.';

const DonationDescription = ({donation, onDonatePress}) => (
  <View style={styles.wrapper}>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.descriptionTitle} h2>
        {donation.label}
      </Text>
      <Text style={styles.descriptionText}>{MOCK_TEXT}</Text>
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
  }),
  onDonatePress: propTypes.func,
};

DonationDescription.defaultProps = {
  onDonatePress: () => null,
};

export default DonationDescription;
