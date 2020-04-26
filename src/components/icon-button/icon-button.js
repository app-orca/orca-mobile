import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, ViewPropTypes} from 'react-native';

import propTypes from 'prop-types';

const IconButton = ({name, size, color, onPress, style}) => (
  <TouchableOpacity {...{style, onPress}}>
    <Icon {...{name, size, color}} />
  </TouchableOpacity>
);

IconButton.propTypes = {
  name: propTypes.string.isRequired,
  size: propTypes.number,
  onPress: propTypes.func,
  style: ViewPropTypes.style,
  color: propTypes.string,
};

export default IconButton;
