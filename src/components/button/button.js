import React from 'react';
import {TouchableOpacity, Text, ViewPropTypes} from 'react-native';

import styles from './button.styles';
import propTypes from 'prop-types';

const Button = ({label, children, style, onPress, textColor, small}) => (
  <TouchableOpacity
    {...{onPress}}
    style={[
      styles.buttonContainer,
      small && styles.smallButtonContainer,
      style,
    ]}>
    {label ? (
      <Text
        style={[
          styles.buttonText,
          small && styles.smallButtonText,
          {color: textColor},
        ]}>
        {small ? label : label.toUpperCase()}
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
  small: propTypes.bool,
};

Button.defaultProps = {
  small: false,
};

export default React.memo(Button);
