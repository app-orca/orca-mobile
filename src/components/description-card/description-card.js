import React from 'react';
import {View, Text, ViewPropTypes} from 'react-native';
import CircleAvatar from '../circle-avatar/circle-avatar';

import styles from './description-card.style';
import propTypes from 'prop-types';

const DescriptionCard = ({label, style}) => (
  <View style={[styles.container, style]}>
    <CircleAvatar
      size={80}
      label={label
        .split(' ')
        .map(word => word[0])
        .join('')}
    />
    <Text style={styles.descriptionText}>{label}</Text>
  </View>
);

DescriptionCard.propTypes = {
  label: propTypes.string,
  style: ViewPropTypes.style,
};

export default DescriptionCard;
