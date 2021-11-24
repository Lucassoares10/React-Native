/* Componente para rota de navegação */
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { theme } from "../global/styles/theme";
import {Home} from '../screens/Home';
import {SignIn} from "../screens/Signin";
import {AppointmentDetails} from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";


const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    /*Uma screen recebe dois parametros o nome eo componente a ser chamado */
    return (
        <Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100

                },
                gestureEnabled: false,
                animationEnabled: false,
                headerShown: false,
            }}
        >

            <Screen
                name="Home"
                component={Home}/>
                
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails} />

            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate} />
        </Navigator>
    )
}
