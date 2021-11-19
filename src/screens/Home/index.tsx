import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Profile} from '../../components/Profile';
import {ButtonAdd} from '../../components/ButtonAdd';
import {ListHeader} from '../../components/ListHeader';
import {CategorySelect} from '../../components/CategorySelect';
import {Appointment} from '../../components/Appointment';
import {ListDivider} from '../../components/ListDivider';
import {styles} from './styles';

export function Home() {
    const [category, setCategory] = useState('');

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
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: '2',
            date: '22/06 as 20:40',
            description: 'E hoje que vamos chegar ao challenger sem perder uma partida do m10 '
        },

    ]


    /* Função criada para desmarcar e marcar as categorias*/
    function handlerCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handlerCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader title="Partidas agendadas"
                            subtitle="Total 6"/>

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Appointment data={item}/>
                    )}
                    ItemSeparatorComponent={() => <ListDivider/>}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}

                />

            </View>
        </View>
    );
}
