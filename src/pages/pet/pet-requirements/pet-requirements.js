import React from 'react';
import {SafeAreaView, ScrollView, Image, View} from 'react-native';
import {Text, Button} from '../../../components';

import styles from './pet-requirements.styles';

import PetRequirementsHeader from '../../../assets/images/requirements/requisitos-principal.png';
import PetRequirementsRight from '../../../assets/images/requirements/requisitos-pata-derecha.png';
import PetRequirementsLeft from '../../../assets/images/requirements/requisitos-pata-izquierda.png';

const PetRequirements = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.containertext}>
      <Image style={styles.logo} source={PetRequirementsHeader} />
      <View style={styles.pataizquierda}>
        <Image source={PetRequirementsLeft} />
        <Text style={styles.numeros}>1</Text>
      </View>
      <Text style={(styles.pataizquierda, styles.textoizquierda)}>
        Ser mayor de 22 años de edad. Presentar la identificación.
      </Text>

      <View style={styles.pataderecha}>
        <Text style={styles.numeros}>2</Text>
        <Image source={PetRequirementsRight} />
      </View>
      <Text style={(styles.pataderecha, styles.textoderecha)}>
        Tener un trabajo fijo que brinde suficientes ingresos económicos.
      </Text>
      <View style={styles.pataizquierda}>
        <Image source={PetRequirementsLeft} />
        <Text style={styles.numeros}>3</Text>
      </View>
      <Text style={(styles.pataizquierda, styles.textoizquierda)}>
        Demostrar que se cuenta conun espacio conveniente para garantizar el
        bienestar de la mascota.
      </Text>

      <View style={styles.pataderecha}>
        <Text style={styles.numeros}>4</Text>
        <Image source={PetRequirementsRight} />
      </View>
      <Text style={(styles.pataderecha, styles.textoderecha)}>
        Se debe realizar un formulario que será analizado por la institución
        para conocer si se cumple con el perfil deseado.
      </Text>
      <View style={styles.pataizquierda}>
        <Image source={PetRequirementsLeft} />
        <Text style={styles.numeros}>5</Text>
      </View>
      <Text style={(styles.pataizquierda, styles.textoizquierda)}>
        Existe un periodo de adaptación de 30 días donde se observa la afinidad
        del perro o gato con el estilo de vida del adoptante para garantizar la
        convivencia entre ambos. Durante esta etapa se debe ser muy paciente y
        entender que muchos de los animales que vienen de la calle sufren de
        algunos miedos que sólo pueden ser reparados con amor.
      </Text>

      <View style={styles.pataderecha}>
        <Text style={styles.numeros}>6</Text>
        <Image source={PetRequirementsRight} />
      </View>
      <Text style={(styles.pataderecha, styles.textoderecha)}>
        Estar dispuesto a enviar actualizaciones de la mascota y visitas al
        hogar por parte de la fundación en caso de ser necesario.
      </Text>
      <Button style={styles.adoptButton} label="Adopta" textColor="white" />
    </ScrollView>
  </SafeAreaView>
);

export default PetRequirements;
