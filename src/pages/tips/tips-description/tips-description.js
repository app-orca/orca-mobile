import React from 'react';
import {View, FlatList} from 'react-native';
import {Text} from '../../../components';

import styles from './tips-description.styles';
import propTypes from 'prop-types';

import DogTipsHeader from '../../../assets/images/dogs-tips-header.svg';
import CatTipsHeader from '../../../assets/images/cats-tips-header.svg';

const MOCKED_TIPS = ['Lorem ipsum', 'Dolor sit', 'Amet Lorem', 'Lorem ipsum'];

const PET_HEADERS = {
  CAN: DogTipsHeader,
  FEL: CatTipsHeader,
};

const TipsDescription = ({petType}) => (
  <View style={styles.wrapper}>
    <FlatList
      data={[null, ...MOCKED_TIPS]}
      renderItem={({item, index}) =>
        item == null ? (
          React.createElement(PET_HEADERS[petType], {
            width: '70%',
            style: styles.headerImage,
          })
        ) : (
          <View style={styles.tipContainer} key={index}>
            <Text style={styles.tipIndex} bold>
              {index + 1}
            </Text>
            <Text>{item}</Text>
          </View>
        )
      }
      keyExtractor={(_, index) => `${index}`}
    />
  </View>
);

TipsDescription.propTypes = {
  petType: propTypes.string,
};

export default TipsDescription;
