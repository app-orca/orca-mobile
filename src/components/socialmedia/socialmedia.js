import React from 'react';
import {
  Linking,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Facebook from 'assets/images/social-media/redes-facebook.png';
import Instagram from 'assets/images/social-media/redes-instagram.png';
import Mail from 'assets/images/social-media/redes-mail.png';
import Web from 'assets/images/social-media/redes-web.png';

import styles from './socialmedia.styles';

const data = [
  {
    key: Facebook,
    link: 'https://www.facebook.com/fundacionorca/',
  },
  {
    key: Instagram,
    link: 'https://instagram.com/fundacionorca?igshid=297wz227445b',
  },
  {
    key: Web,
    link: 'http://www.fundacionorca.org',
  },
  {
    key: Mail,
    link: 'mailto:${contactenos@fundacionorca.org}',
  },
];

const SocialMedia = () => (
  <View style={styles.container}>
    <Text style={styles.texto}>Para mas informacion:</Text>
    <FlatList
      horizontal
      data={data}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
          <Image source={item.key} style={styles.imagen} />
        </TouchableOpacity>
      )}
    />
  </View>
);
export default SocialMedia;
