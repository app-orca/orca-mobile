import React from 'react';
import IconButton from '../icon-button/icon-button';
import CompanyLogo from '../company-logo/company-logo';
import Text from '../text/text';
import {View, TouchableOpacity} from 'react-native';

import styles from './header-nav.style';
import propTypes from 'prop-types';

const HeaderNav = ({onBackPress, onGoHomePress, title, onLogoPress}) => (
  <View style={styles.container}>
    <View style={styles.navOptions}>
      <View>
        {onGoHomePress && (
          <IconButton onPress={onGoHomePress} size={25} name="home" />
        )}
      </View>
      <View>
        {onBackPress && (
          <IconButton onPress={onBackPress} size={25} name="arrow-back" />
        )}
      </View>
    </View>
    <TouchableOpacity onPress={onLogoPress}>
      <CompanyLogo />
    </TouchableOpacity>
    <Text style={styles.navTitle} h1>
      {title.toUpperCase()}
    </Text>
  </View>
);

HeaderNav.propTypes = {
  onBackPress: propTypes.func,
  onGoHomePress: propTypes.func,
  title: propTypes.string,
  onLogoPress: propTypes.func,
};

HeaderNav.defaultProps = {
  title: '',
  onLogoPress: () => null,
};

export default React.memo(HeaderNav);
