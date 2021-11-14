import React, { ReactNode } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

/*Tipagem para passar uma interface para o elemento de background */
 type Props = {
     children : ReactNode;
 }

export function Background({ children } : Props){
    /*Forma de fazer o degrade de cores nas telas */
    const {secondary80, secondary100 } = theme.colors;

    return(
        <LinearGradient
        style= {styles.container}
        colors={[secondary80, secondary100]}
        >
       { children }
        </LinearGradient>
    )

}