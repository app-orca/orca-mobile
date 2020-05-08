import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text, SocialMedia} from 'components';

import styles from './event-description.styles';

const EventDescription = () => (
  <View style={styles.wrapper}>
    <Text style={styles.eventDateText} black>
      MAYO 3
    </Text>
    <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.descriptionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis elit
        felis, sed elementum arcu maximus in. Suspendisse quis dictum odio, vel
        ultricies orci. Cras egestas sagittis euismod. Maecenas convallis, augue
        id tincidunt posuere, nisi felis porttitor libero, eu dapibus diam
        tellus sit amet sem. Etiam felis turpis, malesuada vel urna et, molestie
        ullamcorper nunc. Vivamus eu sagittis eros. Vestibulum laoreet commodo
        cursus. In volutpat, tortor in varius consectetur, libero orci ultrices
        nisl, sed malesuada elit mi at risus.
      </Text>
    </ScrollView>
    <SocialMedia />
  </View>
);

export default EventDescription;
