import {StyleSheet} from 'react-native';

const baseFont = {
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'normal',
    fontSize: 16,
    marginBottom: 7,
  },
};

export default StyleSheet.create({
  h1: {
    ...baseFont.title,
    fontSize: 22,
  },
  h2: {
    ...baseFont.title,
    fontSize: 20,
  },
  h3: {
    ...baseFont.title,
    fontSize: 18,
  },
  h4: {
    ...baseFont.title,
    fontSize: 16,
  },
  p: {
    ...baseFont.text,
  },
  text: {
    ...baseFont.text,
    marginBottom: 0,
  },
  textWhite: {
    color: 'white',
  },
  textBlack: {
    color: 'black',
  },
  textCenter: {
    textAlign: 'center',
  },
});
