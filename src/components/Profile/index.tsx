import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";

export function Profile(){
    return(
        <View style={styles.container}>

            <Avatar urlImage="https://github.com/lucassoares10.png"/>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Ola,
                    </Text>
                    <Text style={styles.username}>
                        Lucas
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje � dia de vit�ria
                </Text>
            </View>
        </View>
    )
    
}
