import { useState } from 'react';
import {
    View,
    Text
} from 'react-native';

import { Boton } from '../components/Boton/Boton';

import styles from './styles/theme';

const color = {
    gris: '#2d2d2d',
    grisclaro: '#b9b9b9',
    naranja: '#ff9427'
}

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('100');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0');
    }

    const armarNumero = (numeroStr: string) => {
        setNumero(String(Number(numero + numeroStr)));
    }

    const positivoNegativo = () => {
        const nuevoNumero = numero.includes('-') ? numero.slice(1) : '-' + numero;
        setNumero(nuevoNumero);
    }

    return (
        <View style={styles.calculadoraContainer}>

            <Text style={styles.resultadoPq}>{numeroAnterior}</Text>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.resultado}>{numero}</Text>

            <View style={styles.fila}>

                <Boton caption='C' color={color.grisclaro} accion={limpiar} />
                <Boton caption='+/-' color={color.grisclaro} accion ={positivoNegativo}/>
                <Boton caption='del' color={color.grisclaro} accion ={limpiar}/>
                <Boton caption='÷' color={color.naranja} accion ={limpiar}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='7' accion={armarNumero} />
                <Boton caption='8' accion={armarNumero} />
                <Boton caption='9' accion={armarNumero} />
                <Boton caption='×' color={color.naranja} accion ={limpiar}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='4' accion={armarNumero} />
                <Boton caption='5' accion={armarNumero} />
                <Boton caption='6' accion={armarNumero} />
                <Boton caption='-' color={color.naranja} accion ={limpiar}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='1' accion={armarNumero} />
                <Boton caption='2' accion={armarNumero} />
                <Boton caption='3' accion={armarNumero} />
                <Boton caption='+' color={color.naranja} accion ={limpiar}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='0' ancho accion={armarNumero} />
                <Boton caption='.' accion={armarNumero}/>
                <Boton caption='=' color={color.naranja} accion ={limpiar}/>

            </View>
        </View>
    )
}

export default CalculadoraScreen;