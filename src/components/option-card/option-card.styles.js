import {StyleSheet} from 'react-native';
import styles from '../../styles';

export default StyleSheet.create({
  optionCardWrapper: {
    backgroundColor: 'white',
    elevation: 5,
    paddingTop: 50,
    borderRadius: 20,
    flex: 1,
  },
  cardText: {
    ...styles.h4,
    ...styles.m0,
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
