import React, {useState} from 'react';
import {HeaderNav, StepperView} from 'components';
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
  const [selectedPetType, setSelectedPetType] = useState(TIPS_OPTIONS[0].value);

  const handleGoHomePress = () => navigation.popToTop();

  const handleOptionPress = data => {
    const selected = TIPS_OPTIONS.find(option => option.value === data);

    setScreenTitle('Tips ' + selected.label);
    setSelectedPetType(data);
    setCurrentIndex(1);
  };

  const handleGoBackPress =
    currentIndex <= 0
      ? null
      : () => {
          if (currentIndex - 1 === 0) {
            setScreenTitle('Tips');
          }

          setCurrentIndex(currentIndex - 1);
        };

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav
        title={screenTitle}
        onBackPress={handleGoBackPress}
        onLogoPress={handleGoHomePress}
      />
      <StepperView {...{currentIndex}}>
        <TipsMenu onOptionPress={handleOptionPress} options={TIPS_OPTIONS} />
        <TipsDescription petType={selectedPetType} />
      </StepperView>
    </SafeAreaView>
  );
};

export default Tips;
