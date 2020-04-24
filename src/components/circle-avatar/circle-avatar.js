import React from 'react';
import {View, Text, ViewPropTypes} from 'react-native';

import styles from './circle-avatar.styles';
import propTypes from 'prop-types';

const DEFAULT_CIRCLE_SIZE = 120;

const CircleAvatar = ({size, style, label}) => (
  <View
    style={[
      styles.circle,
      style,
      {height: size, width: size, borderRadius: size / 2},
    ]}>
    <Text style={styles.circleText}>{label}</Text>
  </View>
);

CircleAvatar.propTypes = {
  size: propTypes.number,
  style: ViewPropTypes.style,
  label: propTypes.string,
};

CircleAvatar.defaultProps = {
  size: DEFAULT_CIRCLE_SIZE,
};

export default CircleAvatar;
