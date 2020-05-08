import React from 'react';
import {View, FlatList} from 'react-native';
import {Text} from '../../../components';

import styles from './tips-description.styles';
import propTypes from 'prop-types';

import DogTipsHeader from '../../../assets/images/dogs-tips-header.svg';
import CatTipsHeader from '../../../assets/images/cats-tips-header.svg';

// Tips temporales, son un dummie mientras tenemos servicios
const MOCKED_TIPS = [
  'Praesent sed risus sit amet mauris vehicula tempus vitae at ipsum. Cras vitae odio interdum, accumsan nulla sit amet, tristique diam. Donec suscipit ornare risus a interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget facilisis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mollis rhoncus tortor a fermentum. Nullam elit erat, commodo eu tincidunt sit amet, sollicitudin et massa. Sed eleifend arcu a scelerisque ullamcorper.',
  'Donec sollicitudin volutpat nisi quis semper. Phasellus tempus efficitur rhoncus. Vivamus eget sodales arcu. Nullam sed pretium ligula. Vivamus ornare ante et augue placerat, eget dignissim eros sagittis.',
  'Sed congue sed nibh id consectetur. Duis dictum eu turpis quis facilisis. Sed non augue sed quam suscipit blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc in feugiat dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit consectetur nunc sed porttitor.',
  'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vel tellus lacus. Aliquam nec tempus est. Nulla laoreet congue massa quis porttitor. Suspendisse ultrices id velit at finibus. Quisque metus sapien, egestas non erat sit amet, consectetur dignissim lorem. Aenean vitae ornare purus. Etiam in nisi eu magna faucibus elementum eget varius dolor.',
];

const PET_HEADERS = {
  CAN: DogTipsHeader,
  FEL: CatTipsHeader,
};

const TipsDescription = ({petType}) => (
  <View style={styles.wrapper}>
    <FlatList
      data={[null, ...MOCKED_TIPS, ...MOCKED_TIPS.reverse(), ...MOCKED_TIPS]}
      renderItem={({item, index}) =>
        item == null ? (
          React.createElement(PET_HEADERS[petType], {
            width: '70%',
            style: styles.headerImage,
          })
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

TipsDescription.propTypes = {
  petType: propTypes.string,
};

export default TipsDescription;
