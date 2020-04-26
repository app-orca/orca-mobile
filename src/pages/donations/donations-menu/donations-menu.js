import React from 'react';
import {FlatList} from 'react-native';
import {DescriptionCard} from '../../../components';

import styles from './donations-menu.styles';
import propTypes from 'prop-types';

const DonationsMenu = ({options, onOptionPress}) => (
  <FlatList
    style={styles.content}
    data={options}
    renderItem={({item}) => (
      <DescriptionCard
        onPress={onOptionPress}
        style={styles.descriptionCard}
        label={item.label.toUpperCase()}
        value={item.value}
      />
    )}
    keyExtractor={(_, index) => `${index}`}
  />
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
