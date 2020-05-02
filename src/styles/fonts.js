import {StyleSheet} from 'react-native';
import {colors} from '../services/ui';

const baseFont = {
  title: {
    fontFamily: 'Nunito-Bold',
    marginBottom: 10,
    color: colors.brown.toString(),
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginBottom: 7,
    color: colors.brown.toString(),
  },
  black: {
    fontFamily: 'Nunito-Black',
    color: colors.brown.toString(),
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
  black: {
    ...baseFont.black,
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
