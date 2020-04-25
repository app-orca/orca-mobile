import React from 'react';
import {View, Text} from 'react-native';
import {HeaderNav} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './tips.styles';

const Tips = ({navigation}) => {
  const handleGoHomePress = () => navigation.popToTop();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.wrapper}>
        <HeaderNav title="Tips" onGoHomePress={handleGoHomePress} />
        <Text>Tips works!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Tips;
