import React from 'react';
import CircleAvatar from '../circle-avatar/circle-avatar';
import {Text, ViewPropTypes} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './description-card.style';
import propTypes from 'prop-types';

const DescriptionCard = ({label, style, onPress, value}) => {
  const handleCardPress = () => onPress(value || label);

  return (
    <TouchableOpacity
      onPress={handleCardPress}
      activeOpacity={0.8}
      style={[styles.container, style]}>
      <CircleAvatar
        size={60}
        label={label
          .split(' ')
          .map(word => word[0])
          .join('')}
      />
      <Text style={styles.descriptionText}>{label}</Text>
    </TouchableOpacity>
  );
};

DescriptionCard.propTypes = {
  label: propTypes.string,
  style: ViewPropTypes.style,
  value: propTypes.string,
  onPress: propTypes.func,
};

DescriptionCard.defaultProps = {
  onPress: () => null,
};

export default DescriptionCard;
