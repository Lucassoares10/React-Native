import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
import {useAuth} from "../../hooks/auth";

export function Profile(){
    const { user } =  useAuth();

    return(
        <View style={styles.container}>

            <Avatar urlImage={user.avatar}/>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Ola,
                    </Text>
                    <Text style={styles.username}>
                        Lucas {user.firstname}
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje ? dia de vit?ria
                </Text>
            </View>
        </View>
    )
    
}
