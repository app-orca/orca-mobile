import React from 'react';
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {Carousel as ReactNativeCarousel} from 'react-native-snap-carousel';

import styles from './carousel.styles';
import propTypes from 'prop-types';

import RightArrow from '../../assets/images/carousel/flecha-der.png';
import LeftArrow from '../../assets/images/carousel/flecha-izq.png';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [],
    };
  }
  _renderItem({item, index}) {
    return (
      <View style={styles.itemContainer}>
        <Image source={item} />
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            this.carousel._snapToItem(this.state.activeIndex - 1);
          }}>
          <Image source={require(LeftArrow)} />
        </TouchableHighlight>
        <View>
          <ReactNativeCarousel
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={250}
            itemWidth={250}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
        <TouchableHighlight
          onPress={() => {
            this.carousel._snapToItem(this.state.activeIndex + 1);
          }}>
          <Image source={require(RightArrow)} />
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}
