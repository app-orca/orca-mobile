import React from 'react';
import {View, Image, FlatList} from 'react-native';
import {Text} from '../../../components';

import styles from './pet-requirements.styles';
import propTypes from 'prop-types';

import PetRequirementsHeader from '../../../assets/images/requirements/requisitos-principal.png';
import PetRequirementsRight from '../../../assets/images/requirements/requisitos-pata-derecha.png';
import PetRequirementsLeft from '../../../assets/images/requirements/requisitos-pata-derecha.png';

const Requirements = [
  'Praesent sed risus sit amet mauris vehicula tempus vitae at ipsum. Cras vitae odio interdum, accumsan nulla sit amet, tristique diam. Donec suscipit ornare risus a interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget facilisis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mollis rhoncus tortor a fermentum. Nullam elit erat, commodo eu tincidunt sit amet, sollicitudin et massa. Sed eleifend arcu a scelerisque ullamcorper.',
  'Donec sollicitudin volutpat nisi quis semper. Phasellus tempus efficitur rhoncus. Vivamus eget sodales arcu. Nullam sed pretium ligula. Vivamus ornare ante et augue placerat, eget dignissim eros sagittis.',
  'Sed congue sed nibh id consectetur. Duis dictum eu turpis quis facilisis. Sed non augue sed quam suscipit blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc in feugiat dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit consectetur nunc sed porttitor.',
  'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vel tellus lacus. Aliquam nec tempus est. Nulla laoreet congue massa quis porttitor. Suspendisse ultrices id velit at finibus. Quisque metus sapien, egestas non erat sit amet, consectetur dignissim lorem. Aenean vitae ornare purus. Etiam in nisi eu magna faucibus elementum eget varius dolor.',
  'Donec sollicitudin volutpat nisi quis semper. Phasellus tempus efficitur rhoncus. Vivamus eget sodales arcu. Nullam sed pretium ligula. Vivamus ornare ante et augue placerat, eget dignissim eros sagittis.',
  'Sed congue sed nibh id consectetur. Duis dictum eu turpis quis facilisis. Sed non augue sed quam suscipit blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc in feugiat dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit consectetur nunc sed porttitor.',
];

const PetRequirements = ({options, onOptionPress}) => (
  <View style={styles.wrapper}>
    <FlatList
      data={Requirements}
      renderItem={({item, index}) =>
        item == null ? (
          <View>
            <Image source={PetRequirementsHeader} style={styles.headerImage} />
          </View>
        ) : (
          <View style={styles.tipContainer} key={index}>
            <Text style={styles.tipIndex} black>
              {index}
            </Text>
            <Text style={styles.descriptionText}>{item}</Text>
          </View>
        )
      }
      keyExtractor={(_, index) => `${index}`}
    />
  </View>
);

PetRequirements.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
  onOptionPress: propTypes.func,
};

export default PetRequirements;
