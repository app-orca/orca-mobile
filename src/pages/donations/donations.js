import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HeaderNav, StepperView} from 'components';
import DonationsMenu from './donations-menu/donations-menu';
import DonationDescription from './donation-description/donation-description';
import Donate from './donate/donate';

import styles from './donations.styles';

const donationOptions = [
  {
    label: 'Plan alcancía',
    value: 'ALCANCIA',
    text:
      'Consiste en un compromiso que hacen los donantes para donar una cuota en dinero fija (5.000-10.000-20.000), cada mes o con la frecuencia que les sea posible y de acuerdo a sus posibilidades económicas. El dinero obtenido de estas donaciones se destina a la manutención de los animales y a suplir las necesidades principales de los animales rescatados, como la alimentación y las atenciones veterinarias.',
  },
  {
    label: 'Plan padrino',
    value: 'PADRINO',
    text:
      'Padrino, es aquella persona que se encarga de velar y proteger a otro, así, hay varios peludos que necesitan de un mano amiga y sentirse aquel ser importante en el corazón de otro, pues somos unos eternos convencidos que el amor, todo lo puede. Los padrinos, le devuelven a un ser abandonado, la certeza de ser un alguien importante, una vida llena de oportunidades; la posibilidad de olvidar, los padecimientos del pasado, el dolor, el hambre, el frío y el miedo, sabiendo que hay alguien que los apoya, que los quiere y los acompaña hasta que logren el fin de hallar un lindo hogar. El padrino hace una inscripción y se encarga de hacer un acompañamiento de su ahijado, dotándolo de una cuota, por medio de la cual, garantizamos su alimentación y atenciones veterinarias; dicha cuota es flexible y permite, brindarle al peludo escogido, todo aquello que requiere. Además, el padrino, es el encargado de hacer seguimiento tras su proceso de adopción, y mientras encuentra su hogar, es quien le dona todo el amor, afecto y cariño que el necesita.',
  },
  {
    label: 'Donación Única',
    value: 'UNICA',
    text:
      'O.R.C.A. es una Organización sin ánimo de lucro, en ningún momento se generan ingresos para los miembros de la fundación, antes por el contrario, el mayor porcentaje de los mismos, deben aportar una cuota mensual para el mantenimiento de la institución y para poder cancelar los gastos que se derivan de las atenciones de los perros y gatos. El 80% de la financiación de O.R.C.A. proviene de las donaciones que las personas que conocen la labor de la institución, otorgan a la misma; ello, porque las cuentas de lo atendido en los diferentes centros veterinarios (como el Centro Veterinario El Poblado), son expuestas para la revisión y conocimiento de todos los integrantes. A la fecha, O.R.C.A. adeuda al CVP una suma de aproximadamente $18.000.000 (dieciocho millones de pesos).',
  },
  {
    label: 'Donación empresarial',
    value: 'EMPRESARIAL',
    text:
      'Cuando una compañía adquiere el compromiso de donar no solo contribuye a una causa social sino que también se puede aprovechar de determinados beneficios tributarios que se establecen por ley. La entidad beneficiaria de (Fundación O.R.C.A) la donación está calificada en el Régimen Tributario Especial, está legalmente constituida y está sometida a inspección, control y vigilancia de una entidad estatal.',
  },
];

const Donations = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDonation, setSelectedDonation] = useState(donationOptions[0]);

  const handleGoHomePress = () => navigation.popToTop();

  const handleGoBack = () => setCurrentIndex(currentIndex - 1);

  const handleOptionPress = value => {
    setSelectedDonation(
      donationOptions.find(donation => donation.value === value),
    );

    setCurrentIndex(1);
  };

  const handleDonatePress = () => setCurrentIndex(2);

  const handleGoToTopStack = () => setCurrentIndex(0);

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderNav
        onBackPress={currentIndex > 0 ? handleGoBack : null}
        onGoHomePress={handleGoHomePress}
        title="Donaciones"
      />
      <StepperView style={styles.wrapper} {...{currentIndex}}>
        <DonationsMenu
          onOptionPress={handleOptionPress}
          options={donationOptions}
        />
        <DonationDescription
          onDonatePress={handleDonatePress}
          donation={selectedDonation}
        />
        <Donate onCancelPress={handleGoToTopStack} />
      </StepperView>
    </SafeAreaView>
  );
};

export default Donations;
