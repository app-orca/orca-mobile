import React from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';

import styles from './information.styles';
import {SocialMedia, HeaderNav} from '../../components';

const Information = ({navigation}) => {
  const handleGoHomePress = () => navigation.popToTop();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNav title={'¿Quienes Somos?'} onGoHomePress={handleGoHomePress} />
      <ScrollView style={styles.containertext}>
        <Text style={styles.texto}>
          O.R.C.A. es la Organización por el Respeto y el Cuidado de los
          animales, es la materialización de la voluntad de varias personas que
          se unieron en pos de ayudar de manera solidaria, a los animales de
          calle, víctimas de violencia, abandono y maltrato de la Ciudad de
          Medellín, Área Metropolitana y alrededores.{'\n'}
          {'\n'} La intención con su formación fue generar generar una
          movilización de conciencias, que despertara en la sociedad una nueva
          cultura, basada en el respeto y la solidaridad, donde cada quien
          aporte lo que se encuentre al alcance de sus manos, en aras de brindar
          una nueva oportunidad de vida a los animales rescatados de las calles.
          {'\n'}
          {'\n'} No tenemos albergue, sólo contamos con el interés de un grupo
          interdisciplinario de personas que brindan su mayor esfuerzo, por
          cambiar la realidad de un animal, que ha estado en las calles. Entre
          todos, apadrinamos, buscamos recursos para cancelar las atenciones
          veterinarias, desparasitamos y esterilizamos; para luego buscar un
          buen hogar, donde pueda reiniciar una vida tranquila al lado de una
          familia.
          {'\n'}
          {'\n'}
          Dicha labor la hacemos gracias a la red que integran voluntarios, pero
          en ningún momento representa una retribución económica. De igual
          forma, los animales que son atendidos por nuestra institución, son
          básicamente los perros y gatos de calle, que no tienen doliente, ni
          personas que los acompañan. {'\n'}
          {'\n'}No ejercemos acciones de tipo beneficencia hacia animales que
          poseen propietarios, aunque si, adelantamos actividades que buscan
          buscan propiciar el respeto y el buen trato por los animales, además
          de la tenencia responsable de mascotas. Buscamos enseñar que entre
          todos,podemos ser parte de la solución. {'\n'}
          {'\n'}En el momento, la institución encuentra LEGALIZADA ante Cámara
          de Comercio, con número de NIT: NIT: 900-35861-8, lo que significa que
          estamos vigilados y podemos expedir CERTIFICADOS DE DONACIÓN.
        </Text>
      </ScrollView>
      <SocialMedia />
    </SafeAreaView>
  );
};

export default Information;
