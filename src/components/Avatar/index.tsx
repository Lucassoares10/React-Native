import React from "react";
import { View, Text, Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

/*Tipagem para onde usar esta componente informar uma url como imagem */
type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    const {secondary50, secondary70 } = theme.colors;

    return(
        <LinearGradient
        style= {styles.container}
        colors={[secondary50, secondary70]}
        >
       <Image 
       source={{uri: urlImage}}
       style= {styles.avatar}       
       />
        </LinearGradient>
    )
    
}