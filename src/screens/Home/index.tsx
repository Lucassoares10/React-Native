import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Profile} from '../../components/Profile';
import {ButtonAdd} from '../../components/ButtonAdd';
import {ListHeader} from '../../components/ListHeader';
import {CategorySelect} from '../../components/CategorySelect';
import {Appointment} from '../../components/Appointment';
import {ListDivider} from '../../components/ListDivider';
import { Background } from "../../components/Background";
import {styles} from './styles';
import {useNavigation} from "@react-navigation/native";
import {AppointmentCreate} from "../AppointmentCreate";

export function Home() {
    const [category, setCategory] = useState('');
    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 as 20:40',
            description: 'E hoje que vamos chegar ao challenger sem perder uma partida do m10 '
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Invenciveis',
                icon: null,
                owner: true
            },
            category: '2',
            date: '22/06 as 20:40',
            description: 'E hoje que vamos chegar ao challenger sem perder uma partida do m10 '
        },
        {
            id: '3',
            guild: {
                id: '3',
                name: 'Joga e Joga',
                icon: null,
                owner: true
            },
            category: '2',
            date: '22/06 as 20:40',
            description: 'E hoje que vamos chegar ao challenger sem perder uma partida do m10 '
        },
        {
            id: '4',
            guild: {
                id: '4',
                name: 'Qnc',
                icon: null,
                owner: true
            },
            category: '2',
            date: '22/06 as 20:40',
            description: 'E hoje que vamos chegar ao challenger sem perder uma partida do m10 '
        },

    ]


    /* Fun????o criada para desmarcar e marcar as categorias*/
    function handlerCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handlerCategorySelect}
            />

                <ListHeader title="Partidas agendadas"
                            subtitle="Total 6"/>

            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Appointment data={item}
                                 onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                contentContainerStyle={{
                    paddingBottom: 69
                }}
                style={styles.matches}
                showsVerticalScrollIndicator={false}

            />
        </Background>
    );
}
