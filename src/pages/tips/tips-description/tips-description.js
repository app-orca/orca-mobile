import React from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'components';

import styles from './tips-description.styles';
import propTypes from 'prop-types';

import DogTipsHeader from 'assets/images/dogs-tips-header.svg';
import CatTipsHeader from 'assets/images/cats-tips-header.svg';

const PET_HEADERS = {
  CAN: DogTipsHeader,
  FEL: CatTipsHeader,
};

const PET_TIPS = {
  CAN: [
    'Ponerle una identificación externa: que tu perro tenga una placa o collar que tenga su nombre  y tus datos de contacto como tu numero de teléfono o dirección es de las cosas mas importantes, pues si por alguna razón tu perro huye o se pierde, entonces tendrás mas oportunidades de poder encontrarlo.',
    'Seguros: si tienes un seguro para tu perro este te podría ayudar en caso de que tengas algún problema tanto con tu perro o si tu perro tuvo algún accidente con otro animal o otra persona.',
    'Lleva a tu mascota al veterinario de manera regular: es bueno tener un veterinario de confianza donde puedas llevar a tu perro en caso de problemas o simplemente por un revisión, vacunas, etc',
    'Higiene del animal: es importante mantener la higiene del al día: orejas, boca y pelo.',
    'Procura tener un ambiente seguro: evita totalmente tener cosas peligrosas como: Plantas peligrosas para ellos como: lirios, trébol, dedalera, tejo, ruibarbo, etc. Enchufes, cables alcanzables, etc.',
    'Debemos limpiar: sus bebederos de agua y contenedores de comida todos los días.',
  ],
  FEL: [
    'El baño: el shampoo debe ser adecuado para cada mascota. Usa algodón en la orejas para evitar infecciones.',
    'Su pelaje: las razas de pelo largo es necesario cepillarlas con regularidad para evitar enredos.',
    'Cuida sus dientes: cepilla sus dientes regularmente y usa siempre una crema dental especial.',
    'Uñas: corta sus uñas con regularidad pata evitar que sientas molestias al caminar.',
    'Alimentación: si tu animal de compañía es un cachorro le tendrás que racionar la comida tres veces al día, cuando sea adulto bastará con dos o una vez al día. Los gatos al contrario que los perros saben racionar la comida bastante bien. Recuerda siempre tener agua fresca a su disposición y ten en cuenta los cuidados de tu animal de compañía en los meses más calurosos.',
    'Todo por su salud: Parásitos: Los gatos y perros deben tratarse contra parásitos internos cada 3 meses, y muy especialmente cuando son cachorros, y antes de vacunarse. También existen parásitos externos, como pulgas y garrapatas que se erradican utilizando productos apropiados.  Vacunas: Lo primero que debes saber, es que si tu animal de compañía no está vacunado no puede entrar en contacto con otros animales ni con el exterior durante los dos primeros meses de v ida. El plan de vacunación variará en función de la raza, estado inmunológico y estilo de vida. Esto ayudara a evitar  enfermedades como parvovirosis, moquillo o hepatitis canina, en el caso de los perros, y otras como calicivirus, panleucopenia, rinotraqueítis, en el caso de los gatos.',
  ],
};

const TipsDescription = ({petType}) => (
  <View style={styles.wrapper}>
    <FlatList
      data={[null, ...PET_TIPS[petType]]}
      renderItem={({item, index}) =>
        item == null ? (
          React.createElement(PET_HEADERS[petType], {
            width: '70%',
            style: styles.headerImage,
          })
        ) : (
          <View style={styles.tipContainer} key={index}>
            <Text style={styles.tipIndex} black>
              {index}
            </Text>
            <Text style={styles.descriptionText}>{item}</Text>
          </View>
        )
      }
      keyExtractor={(_, index) => `${index}`}
    />
  </View>
);

TipsDescription.propTypes = {
  petType: propTypes.string,
};

export default TipsDescription;
