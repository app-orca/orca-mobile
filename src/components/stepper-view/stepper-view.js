import React from 'react';
import {View, ViewPropTypes} from 'react-native';

import styles from './stepper-view.styles';
import propTypes from 'prop-types';

/**
 * Renders a series of steps with passed screens,
 * it renders all passed compoents, so be careful using this
 */
const StepperView = ({children, currentIndex, style}) => {
  let pages = [children];

  if (children.length) {
    pages = Object.keys(children).map((page, i) => (
      <View style={styles.page}>{children[page]}</View>
    ));
  }

  return (
    <View style={[styles.wrapper, style]}>
      {pages[currentIndex > pages.length ? 0 : currentIndex]}
    </View>
  );
};

StepperView.propTypes = {
  children: propTypes.node,
  currentIndex: propTypes.number,
  style: ViewPropTypes.style,
};

StepperView.defaultProps = {
  currentIndex: 0,
};

export default StepperView;
