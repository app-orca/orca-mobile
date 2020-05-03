import React from 'react';
import {TouchableOpacity, Text, ViewPropTypes} from 'react-native';

import styles from './button.styles';
import propTypes from 'prop-types';

const Button = ({label, children, style, onPress, textColor}) => (
  // TODO: Finish implementation of button
  <TouchableOpacity {...{onPress}} style={[styles.buttonContainer, style]}>
    {label ? (
      <Text style={[styles.buttonText, {color: textColor}]}>
        {label.toUpperCase()}
      </Text>
    ) : (
      children
    )}
  </TouchableOpacity>
);

Button.propTypes = {
  label: propTypes.string,
  children: propTypes.node,
  style: ViewPropTypes.style,
  onPress: propTypes.func,
};

Button.defaultProps = {};

export default React.memo(Button);
