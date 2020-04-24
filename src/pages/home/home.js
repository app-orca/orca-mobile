import React from 'react';
import {View, FlatList} from 'react-native';
import {OptionCard} from '../../components';
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

  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.optionsList}
        numColumns={2}
        contentInset={{bottom: 10, left: 10, top: 10, right: 10}}
        data={options}
        renderItem={({item}) => (
          <OptionCard
            onPress={() => handleOptionPress(item.screen)}
            style={styles.optionCard}
            title={item.label}
          />
        )}
        keyExtractor={(_, index) => index}
      />
    </View>
  );
};

export default Home;
