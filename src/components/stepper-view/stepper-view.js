import React from 'react';
import {View, Text} from 'react-native';

// import styles from './stepper-view.styles';
import propTypes from 'prop-types';

/**
 * Renders a series of steps with passed screens,
 * it renders all passed compoents, so be careful using this
 */
const StepperView = ({screens}) => {
  return (
    <View>
      <Text>StepperView works!</Text>
    </View>
  );
};

StepperView.propTypes = {
  screens: propTypes.arrayOf(propTypes.node),
  currentIndex: propTypes.number,
};

StepperView.defaultProps = {
  currentIndex: 0,
};

export default StepperView;
