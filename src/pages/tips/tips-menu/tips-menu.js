import React from 'react';
import {View} from 'react-native';
import {DescriptionCard} from '../../../components';

import styles from './tips-menu.styles';
import propTypes from 'prop-types';

const TipsMenu = ({options, onOptionPress}) => (
  <View>
    {options.map(option => (
      <DescriptionCard
        onPress={onOptionPress}
        style={styles.optionCard}
        key={option.value}
        label={option.label}
        value={option.value}
      />
    ))}
  </View>
);

TipsMenu.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      value: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TipsMenu;
