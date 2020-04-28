import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OptionCard, CompanyLogo} from '../../components';

import styles from './home.styles';

const options = [
  {screen: 'Pet', label: 'Felinos'},
  {screen: 'Pet', label: 'Caninos'},
  {screen: 'Tips', label: 'Tips'},
  {screen: 'Donations', label: 'Donaciones'},
  {screen: 'Lost', label: 'Perdidos'},
  {screen: 'Calendar', label: 'Calendario'},
];

const Home = ({navigation}) => {
  const handleOptionPress = screen => navigation.navigate(screen);
  const onClick = () => navigation.navigate('Information');

  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity onPress={onClick}>
        <CompanyLogo style={styles.companyLogo} size={130} />
      </TouchableOpacity>
      <View style={styles.optionsContainer}>
        <FlatList
          style={styles.optionsList}
          numColumns={2}
          data={options}
          renderItem={({item}) => (
            <OptionCard
              onPress={() => handleOptionPress(item.screen)}
              style={styles.optionCard}
              title={item.label.toUpperCase()}
            />
          )}
          keyExtractor={(_, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
