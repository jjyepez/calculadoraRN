import { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    
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

    return {
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
    }
}