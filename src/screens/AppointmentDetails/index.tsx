import React from "react";
import { View, Text } from 'react-native';
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import {theme} from "../../global/styles/theme";
import {ListHeader} from "../../components/ListHeader";
import { styles } from './styles'
import { ImageBackground } from "react-native";/*Possibilita um cotainer com imagem de fundo*/

import BannerImg from '../../assets/banner.png';

export function AppointmentDetails(){
    return(
        <Background>
        <Header
            title="Detalhes"
            action={
                <BorderlessButton>
                <Fontisto
                    name={"share"}
                    size={24}
                    color={theme.colors.primary}>

                </Fontisto>
                </BorderlessButton>
            }
        />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                <Text style={styles.title}>
                    Lendarios
                </Text>
                <Text style={styles.subtitle}>
                    É hoje que vamos chegar ao challenger sem perder uma partida da md10
                </Text>
                </View>
                </ImageBackground>

            <ListHeader title={"Jogadores"} subtitle={"Total 3"} />
        </Background>
    )
}
