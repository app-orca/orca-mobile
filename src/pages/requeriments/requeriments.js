import React from 'react';
import {SafeAreaView, ScrollView, Image, View, Text} from 'react-native';
import {HeaderNav} from 'components';

import styles from './requeriments.styles';

const Requeriments = ({navigation}) => {
  const handleGoBackPress = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNav title={'Requerimientos'} onGoBackPress={handleGoBackPress} />
      <ScrollView style={styles.containertext}>
        <Image
          style={styles.logo}
          source={require('assets/images/requeriments/requisitos-principal.png')}
        />
        <View style={styles.pataizquierda}>
          <Image
            source={require('assets/images/requeriments/requisitos-pata-izquierda.png')}
          />
          <Text style={styles.numeros}>1</Text>
        </View>
        <Text style={(styles.pataizquierda, styles.textoizquierda)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          elementum tempus lacus, at faucibus felis rhoncus quis. Aenean eget
          quam ac arcu volutpat pellentesque. Quisque posuere eu augue eget
          gravida. Vivamus ultrices nibh a orci facilisis, sed feugiat elit
          fermentum. Nunc et dolor ipsum. Etiam sagittis, odio sit amet volutpat
          imperdiet, enim lacus feugiat justo, a tincidunt neque ex quis mi.
          Quisque ac rutrum sapien, sed porttitor sem. Suspendisse ut arcu
          augue. Morbi in pellentesque dui, ut pellentesque libero.
        </Text>

        <View style={styles.pataderecha}>
          <Text style={styles.numeros}>2</Text>
          <Image
            source={require('assets/images/requeriments/requisitos-pata-derecha.png')}
          />
        </View>
        <Text style={(styles.pataderecha, styles.textoderecha)}>
          Sed ac nulla eu tortor egestas sollicitudin vitae et lectus. Aenean
          lacinia malesuada tellus eget congue. Phasellus sed convallis nibh, id
          placerat quam. Nulla maximus nibh sed nisi tincidunt malesuada sit
          amet nec augue. Fusce tempor arcu bibendum pulvinar rhoncus. Vivamus
          sed nulla sit amet justo fermentum dapibus. Pellentesque iaculis dui
          erat, quis elementum lorem suscipit quis. Cras imperdiet, velit id
          varius sodales, lacus dolor malesuada velit, non semper libero nisi at
          arcu. Cras suscipit dictum elit, id posuere enim condimentum et.
          Maecenas ut lorem in lacus bibendum sagittis et et nibh. Etiam lectus
          orci, congue quis mauris a, molestie blandit dolor. In sed ante ut
          orci vulputate eleifend. Nulla felis ex, semper vel maximus vel,
          lobortis ac dolor. Etiam consectetur at tellus eget efficitur.
        </Text>
        <View style={styles.pataizquierda}>
          <Image
            source={require('assets/images/requeriments/requisitos-pata-izquierda.png')}
          />
          <Text style={styles.numeros}>3</Text>
        </View>
        <Text style={(styles.pataizquierda, styles.textoizquierda)}>
          Maecenas eu imperdiet libero. Nullam vitae odio ac ex consectetur
          blandit. Mauris vel commodo nisi, at feugiat urna. Mauris convallis
          fermentum lobortis. Sed consectetur orci erat. Donec quis porttitor
          libero, sed mollis metus. Vestibulum quis mi ac leo vestibulum
          facilisis vitae et justo. Nunc dignissim massa nec erat faucibus
          gravida.
        </Text>

        <View style={styles.pataderecha}>
          <Text style={styles.numeros}>4</Text>
          <Image
            source={require('assets/images/requeriments/requisitos-pata-derecha.png')}
          />
        </View>
        <Text style={(styles.pataderecha, styles.textoderecha)}>
          Suspendisse ullamcorper justo ac lacus imperdiet tincidunt. Nunc
          vestibulum mollis maximus. Quisque purus mauris, vestibulum sit amet
          elementum vitae, suscipit eu erat. Duis euismod iaculis massa, a
          rhoncus enim sagittis ac. Maecenas ac congue libero. Vestibulum
          auctor, lacus ut commodo gravida, arcu mauris rhoncus odio, non
          vestibulum lacus dolor at mauris. Curabitur lobortis mi sed nibh
          lacinia gravida. Donec accumsan placerat massa eget gravida. Quisque
          et posuere libero. Sed dapibus suscipit odio ut dictum. Pellentesque
          dictum erat quis ante dictum, at accumsan mauris feugiat. Proin
          sollicitudin ante mi, facilisis iaculis mauris euismod sed. Aliquam
          erat volutpat. Vivamus hendrerit venenatis massa, sit amet molestie
          tortor finibus nec. Nullam placerat accumsan diam.
        </Text>
        <View style={styles.pataizquierda}>
          <Image
            source={require('assets/images/requeriments/requisitos-pata-izquierda.png')}
          />
          <Text style={styles.numeros}>5</Text>
        </View>
        <Text style={(styles.pataizquierda, styles.textoizquierda)}>
          Donec suscipit bibendum nulla, ac congue diam viverra vel. Curabitur
          ligula erat, blandit sit amet augue eget, porttitor consectetur sem.
          Sed id eleifend eros. Integer sit amet augue faucibus, facilisis
          ligula aliquam, fermentum nulla. Praesent risus sapien, elementum ac
          sem ut, scelerisque maximus est. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Etiam
          viverra malesuada arcu, quis lobortis tortor molestie eu. Integer non
          turpis felis. Nulla facilisi. Pellentesque nec erat et dolor elementum
          maximus. Curabitur et euismod nunc. Sed mollis pellentesque metus sit
          amet iaculis. Aenean bibendum gravida placerat. Nulla tincidunt nibh
          elementum elit egestas pulvinar. Nam gravida aliquam nisl a finibus.
          Phasellus egestas est sollicitudin, commodo est vel, vestibulum felis.
        </Text>

        <View style={styles.pataderecha}>
          <Text style={styles.numeros}>6</Text>
          <Image
            source={require('assets/images/requeriments/requisitos-pata-derecha.png')}
          />
        </View>
        <Text style={(styles.pataderecha, styles.textoderecha)}>
          Quisque rutrum est eu ipsum dapibus, scelerisque accumsan tellus
          mollis. Vivamus ullamcorper pellentesque dui, eget ullamcorper lacus
          imperdiet nec. Quisque non posuere arcu, vitae posuere mauris. Quisque
          justo arcu, congue vitae pulvinar id, egestas eget dui. Duis efficitur
          libero ut augue hendrerit rutrum. Phasellus varius rutrum lacus, quis
          bibendum magna consectetur a. Nullam quis lectus et orci tempus ornare
          eu nec nulla. Nulla finibus felis in nunc bibendum malesuada. Nunc
          felis orci, mollis vel aliquam tincidunt, interdum ac purus. Praesent
          eros libero, scelerisque vitae turpis in, tincidunt porta dui.
          Pellentesque arcu odio, egestas vitae ipsum id, ullamcorper hendrerit
          ipsum.
        </Text>
      </ScrollView>
      <Image
        style={styles.botonadopta}
        source={require('assets/images/boton-adopta.png')}
      />
    </SafeAreaView>
  );
};

export default Requeriments;
