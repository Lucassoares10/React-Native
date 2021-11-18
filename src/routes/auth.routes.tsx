/* Componente para rota de navegação */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../screens/Home';
import { SignIn } from "../screens/Signin";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    /*Uma screen recebe dois parametros o nome eo componente a ser chamado */
    return(
        <Navigator
        screenOptions={{
            cardStyle: {
                backgroundColor: '#0E1647'
                
            },
            gestureEnabled: false,
            animationEnabled: false,
            headerShown: false,
        }}
    >

            <Screen
            name="SigIn"
            component={SignIn} />

            <Screen
            name="Home"
            component={Home} />

        </Navigator>
    )
}