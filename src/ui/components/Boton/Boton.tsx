import { View, Text, TouchableOpacity, useWindowDimensions  } from "react-native";

import styles from './Boton.styles';

interface Props {
    caption: string;
    color? : string;
    ancho? : boolean;
    accion: (numeroStr: string)=>void;
}

export const Boton = ({caption, color='#2d2d2d', ancho = false, accion}: Props) => {

    const {width, height} = useWindowDimensions();

    return (
        <TouchableOpacity activeOpacity={.5} onPress={()=>accion(caption)}>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: ancho ? ((width / 4) * 2 - 14) : ((width / 4) - 14),
                height: ((width / 4) - 14)
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