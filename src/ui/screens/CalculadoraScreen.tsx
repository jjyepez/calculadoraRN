import {
    View,
    Text
} from 'react-native';

import { useCalculadora } from '../../logic/hooks/useCalculadora';

import { Boton } from '../components/Boton/Boton';

import styles from './styles/theme';

enum Colores {
    gris = '#2d2d2d',
    grisclaro = '#b9b9b9',
    naranja = '#ff9427'
}

export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        armarNumero,
        limpiar,
        positivoNegativo,
        eliminarUltimo,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>

            { numeroAnterior!== '0' && <Text style={styles.resultadoPq}>{numeroAnterior}</Text>}

            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.resultado}>{numero}</Text>

            <View style={styles.fila}>

                <Boton caption='C' color={Colores.grisclaro} accion={limpiar} />
                <Boton caption='+/-' color={Colores.grisclaro} accion ={positivoNegativo}/>
                <Boton caption='del' color={Colores.grisclaro} accion ={eliminarUltimo}/>
                <Boton caption='÷' color={Colores.naranja} accion = {btnDividir}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='7' accion={armarNumero} />
                <Boton caption='8' accion={armarNumero} />
                <Boton caption='9' accion={armarNumero} />
                <Boton caption='×' color={Colores.naranja} accion ={btnMultiplicar}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='4' accion={armarNumero} />
                <Boton caption='5' accion={armarNumero} />
                <Boton caption='6' accion={armarNumero} />
                <Boton caption='-' color={Colores.naranja} accion ={btnRestar}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='1' accion={armarNumero} />
                <Boton caption='2' accion={armarNumero} />
                <Boton caption='3' accion={armarNumero} />
                <Boton caption='+' color={Colores.naranja} accion ={btnSumar}/>

            </View>

            <View style={styles.fila}>

                <Boton caption='0' ancho accion={armarNumero} />
                <Boton caption='.' accion={armarNumero}/>
                <Boton caption='=' color={Colores.naranja} accion ={calcular}/>

            </View>
        </View>
    )
}

export default CalculadoraScreen;