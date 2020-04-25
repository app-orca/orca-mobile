import React from 'react';
import IconButton from '../icon-button/icon-button';
import CircleAvatar from '../circle-avatar/circle-avatar';
import Text from '../text/text';
import {View} from 'react-native';

import styles from './header-nav.style';
import propTypes from 'prop-types';

const HeaderNav = ({onBackPress, onGoHomePress, title}) => (
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
    <CircleAvatar label="ORCA" size={80} />
    <Text style={styles.navTitle} h3>
      {title}
    </Text>
  </View>
);

HeaderNav.propTypes = {
  onBackPress: propTypes.func,
  onGoHomePress: propTypes.func,
  title: propTypes.string,
};

export default React.memo(HeaderNav);
