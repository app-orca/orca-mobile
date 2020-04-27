import React from 'react';
import {View, FlatList} from 'react-native';
import {Text} from '../../../components';

import styles from './tips-description.styles';
import propTypes from 'prop-types';

const MOCKED_TIPS = ['Lorem ipsum', 'Dolor sit', 'Amet Lorem', 'Lorem ipsum'];

const TipsDescription = ({petType}) => (
  <FlatList
    data={MOCKED_TIPS}
    renderItem={({item, index}) => (
      <View style={styles.tipContainer} key={index}>
        <Text style={styles.tipIndex} bold>
          {index + 1}
        </Text>
        <Text>{item}</Text>
      </View>
    )}
    keyExtractor={(_, index) => `${index}`}
  />
);

TipsDescription.propTypes = {
  petType: propTypes.string,
};

export default TipsDescription;
