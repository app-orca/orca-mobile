import React from 'react';
import {FlatList} from 'react-native';
import {DescriptionCard} from '../../../components';

import styles from './donations-menu.styles';
import propTypes from 'prop-types';

const DonationsMenu = ({options}) => (
  <FlatList
    style={styles.content}
    data={options}
    renderItem={({item}) => (
      <DescriptionCard
        style={styles.descriptionCard}
        label={item.label.toUpperCase()}
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
};

export default DonationsMenu;
