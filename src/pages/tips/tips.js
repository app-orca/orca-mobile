import React from 'react';
import {View} from 'react-native';
import {HeaderNav, OptionCard} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './tips.styles';

const Tips = ({navigation}) => {
  const handleGoHomePress = () => navigation.popToTop();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.wrapper}>
        <HeaderNav title="Tips" onGoHomePress={handleGoHomePress} />
        <View style={styles.optionsWrapper}>
          <OptionCard style={styles.optionCard} title="Caninos" />
          <OptionCard style={styles.optionCard} title="Felinos" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tips;
