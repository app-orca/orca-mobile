import React from 'react';
import {Linking, View, Image, TouchableOpacity} from 'react-native';
import Text from '../text/text';

import styles from './socialmedia.styles';

import Facebook from 'assets/images/social-media/redes-facebook.png';
import Instagram from 'assets/images/social-media/redes-instagram.png';
import Mail from 'assets/images/social-media/redes-mail.png';
import Web from 'assets/images/social-media/redes-web.png';

const data = [
  {
    image: Facebook,
    link: 'https://www.facebook.com/fundacionorca/',
  },
  {
    image: Instagram,
    link: 'https://instagram.com/fundacionorca?igshid=297wz227445b',
  },
  {
    image: Web,
    link: 'http://www.fundacionorca.org',
  },
  {
    image: Mail,
    link: 'mailto:${contactenos@fundacionorca.org}',
  },
];

const SocialMedia = () => (
  <View style={styles.container}>
    <Text style={styles.texto}>Para más informacion:</Text>
    <View style={styles.socialMediaContainer}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={`${index}`}
          onPress={() => Linking.openURL(item.link)}>
          <Image source={item.image} style={styles.imagen} />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);
export default SocialMedia;
