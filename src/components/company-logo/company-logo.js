import React from 'react';
import {Image, ViewPropTypes} from 'react-native';

import propTypes from 'prop-types';

import Logo from '../../assets/images/logo.png';

const CompanyLogo = ({size, style}) => (
  <Image
    source={Logo}
    resizeMode="contain"
    style={[{height: size, width: size}, style]}
  />
);

CompanyLogo.propTypes = {
  size: propTypes.number,
  style: ViewPropTypes.style,
};

CompanyLogo.defaultProps = {
  size: 100,
};

export default CompanyLogo;
