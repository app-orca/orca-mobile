import React, {useState} from 'react';
import {HeaderNav, StepperView} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import TipsMenu from './tips-menu/tips-menu';
import TipsDescription from './tips-description/tips-description';

import styles from './tips.styles';

const TIPS_OPTIONS = [
  {label: 'Caninos', value: 'CAN'},
  {label: 'Felinos', value: 'FEL'},
];

const Tips = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenTitle, setScreenTitle] = useState('Tips');
  const [selectedPetType, setSelectedPetType] = useState(TIPS_OPTIONS[0]);

  const handleGoHomePress = () => navigation.popToTop();

  const handleOptionPress = data => {
    console.log(data);
    setCurrentIndex(1);
  };

  const handleGoBackPress =
    currentIndex <= 0 ? null : () => setCurrentIndex(currentIndex - 1);

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav
        title={screenTitle}
        onBackPress={handleGoBackPress}
        onGoHomePress={handleGoHomePress}
      />
      <StepperView {...{currentIndex}}>
        <TipsMenu onOptionPress={handleOptionPress} options={TIPS_OPTIONS} />
        <TipsDescription />
      </StepperView>
    </SafeAreaView>
  );
};

export default Tips;
