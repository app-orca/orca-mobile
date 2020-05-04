import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';

import styles from './lost-menu.styles';
import propTypes from 'prop-types';

import Perdido1 from '../../../assets/images/lost/perdidos-bruno.png';
import Perdido2 from '../../../assets/images/lost/perdidos-doki.png';

const lostOptions = {
  p1: Perdido1,
  p2: Perdido2,
};

const LostMenu = ({options, onOptionPress}) => (
  <View style={styles.content}>
    {options.map((option, index) => (
      <TouchableOpacity
        onPress={() => onOptionPress(option.value)}
        key={`${index}`}
        style={styles.descriptionCard}>
        
      </TouchableOpacity>
    ))}
  </View>
);

LostMenu.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      value: propTypes.string.isRequired,
    }),
  ).isRequired,
  onOptionPress: propTypes.func,
};

export default LostMenu;
;
