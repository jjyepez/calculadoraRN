import { useRef, useState } from 'react';
import {
    View,
    Text
} from 'react-native';

import { Boton } from '../components/Boton/Boton';

import styles from './styles/theme';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

const color = {
    gris: '#2d2d2d',
    grisclaro: '#b9b9b9',
    naranja: '#ff9427'
}

export const CalculadoraScreen = () => {

    let refOperador = useRef<Operadores>();

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const eliminarUltimo = () => {
        if(numero.slice(0,-1)=='-' || numero.length == 1) {
            setNumero('0')
        } else {
            setNumero(numero.slice(0,-1));
        }
    }

    const armarNumero = (numeroStr: string) => {
        if(numeroStr === '.' && numero.includes('.')) return;
        if((numero === '0' || numero === '-0') && numeroStr !== '.') {
            setNumero((numero.includes('-') ? '-' : '') + numeroStr);
            return;
        }
        setNumero(numero + numeroStr);
    }

    const positivoNegativo = () => {
        const nuevoNumero = numero.includes('-') ? numero.slice(1) : '-' + numero;
        setNumero(nuevoNumero);
    }

    const pasarAnterior = () => {
        setNumeroAnterior(numero.endsWith('.') ? numero.slice(0,-1) : numero);
        setNumero('0');
    }

    const btnSumar = () => {
        pasarAnterior();
        refOperador.current = Operadores.sumar;
    }

    const btnRestar = () => {
        pasarAnterior();
        refOperador.current = Operadores.restar;
    }

    const btnMultiplicar = () => {
        pasarAnterior();
        refOperador.current = Operadores.multiplicar;
    }

    const btnDividir = () => {
        pasarAnterior();
        refOperador.current = Operadores.dividir;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        let resultado = 0;
        switch(refOperador.current){
            case Operadores.sumar:
                resultado = num1 + num2;
                break;
            case Operadores.restar:
                resultado = num2 - num1;
                break;
            case Operadores.multiplicar:
                resultado = num1 * num2;
                break;
            case Operadores.dividir:
                resultado = num2 / num1;
                break;
            default:
                resultado = num1;
        }
        setNumero('' + resultado);
        setNumeroAnterior('0');
        refOperador.current = undefined;
    }

    return (
        <View style={styles.calculadoraContainer}>

            { numeroAnterior!== '0' && <Text style={styles.resultadoPq}>{numeroAnterior}</Text>}

            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.resultado}>{numero}</Text>

            <View style={styles.fila}>

                <Boton caption='C' color={color.grisclaro} accion={limpiar} />
                <Boton caption='+/-' color={color.grisclaro} accion ={positivoNegativo}/>
                <Boton caption='del' color={color.grisclaro} accion ={eliminarUltimo}/>
                <Boton caption='÷' color={color.naranja} accion = {btnDividir}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='7' accion={armarNumero} />
                <Boton caption='8' accion={armarNumero} />
                <Boton caption='9' accion={armarNumero} />
                <Boton caption='×' color={color.naranja} accion ={btnMultiplicar}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='4' accion={armarNumero} />
                <Boton caption='5' accion={armarNumero} />
                <Boton caption='6' accion={armarNumero} />
                <Boton caption='-' color={color.naranja} accion ={btnRestar}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='1' accion={armarNumero} />
                <Boton caption='2' accion={armarNumero} />
                <Boton caption='3' accion={armarNumero} />
                <Boton caption='+' color={color.naranja} accion ={btnSumar}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='0' ancho accion={armarNumero} />
                <Boton caption='.' accion={armarNumero}/>
                <Boton caption='=' color={color.naranja} accion ={calcular}/>

            </View>
        </View>
    )
}

export default CalculadoraScreen;