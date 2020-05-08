import React from 'react';
import {SafeAreaView, ScrollView, Image, View} from 'react-native';
import {Text, Button} from 'components';

import styles from './pet-requirements.styles';

import PetRequirementsHeader from 'assets/images/requirements/requisitos-principal.png';
import PetRequirementsRight from 'assets/images/requirements/requisitos-pata-derecha.png';
import PetRequirementsLeft from 'assets/images/requirements/requisitos-pata-izquierda.png';

const PET_REQUIREMENTS_MOCK = [
  'Ser mayor de 22 años de edad. Presentar la identificación.',
  'Tener un trabajo fijo que brinde suficientes ingresos económicos.',
  'Demostrar que se cuenta conun espacio conveniente para garantizar el bienestar de la mascota.',
  'Se debe realizar un formulario que será analizado por la institución para conocer si se cumple con el perfil deseado.',
  'Existe un periodo de adaptación de 30 días donde se observa la afinidad del perro o gato con el estilo de vida del adoptante para garantizar la convivencia entre ambos. Durante esta etapa se debe ser muy paciente y entender que muchos de los animales que vienen de la calle sufren de algunos miedos que sólo pueden ser reparados con amor.',
  'Estar dispuesto a enviar actualizaciones de la mascota y visitas al hogar por parte de la fundación en caso de ser necesario.',
];

const PetRequirements = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.containertext}>
      <Image style={styles.logo} source={PetRequirementsHeader} />
      {PET_REQUIREMENTS_MOCK.map((requirement, index) => (
        <View
          key={`pet-requirement-${index}`}
          style={styles.requirementContainer}>
          <View
            style={[
              styles.legContainer,
              !(index % 2) && styles.legContainerInverse,
            ]}>
            <Image
              source={index % 2 ? PetRequirementsLeft : PetRequirementsRight}
            />
            <Text style={styles.numeros}>{index + 1}</Text>
          </View>
          <Text
            style={[
              styles.requirementText,
              index % 2 && styles.requirementTextRight,
            ]}>
            {requirement}
          </Text>
        </View>
      ))}
      <Button style={styles.adoptButton} label="Adopta" textColor="white" />
    </ScrollView>
  </SafeAreaView>
);

export default PetRequirements;
