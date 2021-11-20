import React, {useState} from "react";
import {View, Text} from 'react-native';
import {Background} from "../../components/Background";
import { Feather } from '@expo/vector-icons';
import {Header} from "../../components/Header";
import {theme} from "../../global/styles/theme";
import {CategorySelect} from "../../components/CategorySelect";
import {RectButton} from "react-native-gesture-handler";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import {styles} from './styles'

import {ImageBackground} from "react-native";/*Possibilita um cotainer com imagem de fundo*/

import BannerImg from '../../assets/banner.png';

export function AppointmentCreate() {
    const [category, setCategory] = useState('');

    return (
        <Background>
            <Header
                title="Agendar Partida"
            />
            <Text style={
                [styles.label, { marginLeft: 24, marginTop: 36,marginBottom: 18 }]
            }>
                Categoria
            </Text>
            <CategorySelect
                hasCheckBox
                categorySelected={setCategory}
                setCategory={category}/>

            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        {
                      /*  <View style={styles.image}/>*/
                        <GuildIcon  />
                        }

                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Selecione um servidor
                            </Text>
                        </View>
                            <Feather
                                name={"chevron-right"}
                                color={theme.colors.heading}
                                size={18}
                            />
                    </View>
                </RectButton>

                <View style={styles.field}>
                    <View>
                        <Text style={styles.label}>
                            Dia e mes
                        </Text>
                    </View>
                    <View style={styles.column}>
                    <SmallInput maxLength={2}/>
                        <Text style={styles.divider}>
                            /
                        </Text>
                        <SmallInput maxLength={2}/>
                    </View>
                </View>

            </View>
        </Background>
    )
}
