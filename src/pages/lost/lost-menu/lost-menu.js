import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './lost-menu.styles';
import propTypes from 'prop-types';

import Perdido1 from '../../../assets/images/lost/perdidos-bruno.png';
import Perdido2 from '../../../assets/images/lost/perdidos-doki.png';

const lostOptions = {
  p1: Perdido1,
  p2: Perdido2,
};

const LostMenu = ({options, onOptionPress}) => {
  let optionsRows = [...options];

  optionsRows = Array.from(
    {length: Math.ceil(optionsRows.length / 2)},
    (v, i) => optionsRows.slice(i * 2, i * 2 + 2),
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.optionsContainer}>
        {optionsRows.map((row, index) => (
          <View key={`row-${index}`} style={styles.optionsRow}>
            {row.map((option, itemIndex) => (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => onOptionPress(option.value)}
                style={styles.option}
                key={itemIndex}>
                <Image source={lostOptions[option.value]} />;
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

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
