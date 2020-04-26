import React from 'react';
import {Linking, FlatList, View, Text} from 'react-native';

const SocialMedia = () => (
  <View>
    <FlatList
      horizontal
      data={[
        {key: 'Facebook', link: 'https://www.facebook.com'},
        {key: 'Instagram', link: 'https://www.instagram.com'},
        {key: 'Whatsapp', link: 'https://www.whatsapp.com'},
      ]}
      renderItem={({item}) => (
        <Text onPress={() => Linking.openURL(item.link)}>{item.key}</Text>
      )}
    />
  </View>
);
export default SocialMedia;
