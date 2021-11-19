import React from "react";
import { ScrollView} from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from './styles';
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps;

export function CategorySelect({...rest}: RectButtonProps){
    return(
        <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator= {false}
        contentContainerStyle={{paddingRight: 40}}
        >
            
        </ScrollView>
    )
}
