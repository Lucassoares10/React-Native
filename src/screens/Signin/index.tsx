import React from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon';
import {Background} from "../../components/Background";
import IllustrationImg from "../../assets/illustration.png";
import {styles} from './styles';
import {useAuth} from "../../hooks/auth";


export function SignIn(){
    const { user, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        }catch (error) {
            Alert.alert(error);
        }
    }

    /* const[text, setText] = useState(''); |||||||Criar um estado(text=nome), (função que atualiza o estado (Set.nome)) */

    return (
        <Background>
            <View style={styles.container}>

                <Image source={IllustrationImg} style={styles.image} resizeMode="stretch"/>

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {`\n`}
                        e organize suas {`\n`}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games{`\n`}
                        favoritos com seus amigos
                    </Text>

                    {/*Caso queira reutilizar componente trocar o title para mudança */}
                    <ButtonIcon title="Entrar com Discord"
                                onPress={handleSignIn}
                    />
                </View>
            </View>
        </Background>
    );
}
