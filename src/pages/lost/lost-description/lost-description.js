import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Text} from '../../../components';

import styles from './lost-description.styles';
import propTypes from 'prop-types';

const LostDescription = ({lost}) => (
  <View style={styles.wrapper}>
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={lost.src} />
      </View>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.descriptionTitle}>
          <Text bold>{lost.name.toUpperCase()}</Text>
        </Text>
        <Text style={styles.descriptionTitle}>
          <Text bold>{lost.phone}</Text>
        </Text>
        <Text style={styles.descriptionTitle}>
          <Text bold>{lost.city.toUpperCase()}</Text>
        </Text>
      </View>
    </ScrollView>
  </View>
);

LostDescription.propTypes = {
  lost: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
  }),
};

export default LostDescription;
