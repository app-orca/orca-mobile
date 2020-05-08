import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';

import styles from './tips-menu.styles';
import propTypes from 'prop-types';

import DogTipsHeader from '../../../assets/images/dogs-tips-header.svg';
import CatTipsHeader from '../../../assets/images/cats-tips-header.svg';

const optionsImages = {
  FEL: CatTipsHeader,
  CAN: DogTipsHeader,
};

const TipsMenu = ({options, onOptionPress}) => (
  <View style={styles.optionsWrapper}>
    {options.map((option, index) => (
      <TouchableOpacity
        onPress={() => onOptionPress(option.value)}
        style={styles.optionCard}
        key={index}>
        <View style={styles.imageContainer}>
          {React.createElement(optionsImages[option.value], {
            style: styles.optionCardImage,
            height: '100%',
            width: '65%',
          })}
        </View>
        <Text style={styles.cardText}>{option.label.toUpperCase()}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

TipsMenu.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      value: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TipsMenu;
