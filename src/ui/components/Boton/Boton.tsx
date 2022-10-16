import { View, Text, TouchableOpacity } from "react-native";

import styles from './Boton.styles';

interface Props {
    caption: string;
    color? : string;
    ancho? : boolean;
    accion: (numeroStr: string)=>void;
}

export const Boton = ({caption, color='#2d2d2d', ancho = false, accion}: Props) => {

    return (
        <TouchableOpacity activeOpacity={.5} onPress={()=>accion(caption)}>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: ancho ? 160 : 74
            }}>
                    <Text style={{
                        ...styles.botonTexto,
                        color: color == '#b9b9b9' ? 'black' : 'white'
                    }}>{caption}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Boton;