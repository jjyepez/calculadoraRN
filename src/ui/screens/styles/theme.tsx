import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    fondo: {
        flex: 1,
        backgroundColor: '#111'
    },

    calculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },

    resultado: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right'
    },

    resultadoPq: {
        fontSize: 30,
        color: 'rgba(128,128,128,.75)',
        textAlign: 'right'
    },

    fila: {
        flexDirection: 'row',
    }

})

export default styles;