
import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from "../../assets/illustration.png";
import { styles } from './styles';

export function SignIn() {
    /* const[text, setText] = useState(''); |||||||Criar um estado(text=nome), (fun��o que atualiza o estado (Set.nome)) */

  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle= "light-content"
      backgroundColor= "transparent"
      translucent
      />

    <Image source={IllustrationImg} style={styles.image} resizeMode= "stretch" />

    <View style={styles.content}>
       <Text style = {styles.title}>
       Organize {`\n`}
       suas jogatinas {`\n`} 
       facilmente 
       </Text>

       <Text style={styles.subtitle}>
         Crie grupos para jogar seus games{`\n`}
         favoritos com seus amigos
       </Text>

       {/*Caso queira reutilizar componente trocar o title para mudan�a */}
      <ButtonIcon  title="Entrar com Discord"
      activeOpacity= {0.7}
      /> 
    </View>
    </View>
  );
}