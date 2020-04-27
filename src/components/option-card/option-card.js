import React from 'react';
import {Text, TouchableOpacity, ViewPropTypes} from 'react-native';

import styles from './option-card.styles';
import propTypes from 'prop-types';

const OptionCard = ({title, style, onPress}) => {
  return (
    <TouchableOpacity
      {...{onPress}}
      activeOpacity={0.8}
      style={[styles.optionCardWrapper, style]}>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

OptionCard.propTypes = {
  title: propTypes.string.isRequired,
  style: ViewPropTypes.style,
  onPress: propTypes.func,
};

export default OptionCard;
