import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../components';

import styles from './tips-description.styles';

const MOCKED_TIPS = ['Lorem ipsum', 'Dolor sit', 'Amet Lorem', 'Lorem ipsum'];

const TipsDescription = () => (
  <View>
    {MOCKED_TIPS.map((tip, index) => (
      <View style={styles.tipContainer} key={index}>
        <Text style={styles.tipIndex} bold>
          {index + 1}
        </Text>
        <Text>{tip}</Text>
      </View>
    ))}
  </View>
);

export default TipsDescription;
