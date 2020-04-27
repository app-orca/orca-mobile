import {StyleSheet} from 'react-native';

const baseFont = {
  title: {
    fontFamily: 'Nunito-Bold',
    marginBottom: 10,
    color: '#3F0606',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginBottom: 7,
    color: '#3F0606',
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
  bold: {
    ...baseFont.title,
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
