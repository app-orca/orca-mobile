import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';

import styles from './lost-menu.styles';
import propTypes from 'prop-types';

const LostMenu = ({options, onOptionPress}) => (
  <View style={styles.wrapper}>
    <FlatList
      data={options}
      renderItem={({item, index}) =>
        item == null ? (
          <TouchableOpacity
            style={styles.option}
            onPress={() => onOptionPress(item.id)}>
            <Image source={item.src} style={styles.image} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.option}
            onPress={() => onOptionPress(item.id)}>
            <Image source={item.src} style={styles.image} />
            <View style={styles.textNameContainer}>
              <Text bold style={styles.textName}>
                {item.name.toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>
        )
      }
      numColumns={2}
      keyExtractor={(_, index) => `${index}`}
    />
  </View>
);

LostMenu.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
  onOptionPress: propTypes.func,
};

export default LostMenu;
