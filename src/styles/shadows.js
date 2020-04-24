import {StyleSheet, Platform} from 'react-native';

const baseShadows = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  android: {
    elevation: 5,
  },
});

export default StyleSheet.create({
  shadowS: {
    ...baseShadows,
  },
});
