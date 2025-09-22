import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Botao from '../components/Botao'
import TelaDeOperacao from '../components/TelaDeOperacao';
import Resultado from '../components/Resultado';

export default function Calculadora() {

    const [primeiroNumero, setPrimeiroNumero] = useState('');
    const [segundoNumero, setSegundoNumero] = useState('');
    const [operador, setOperador] = useState(null);
    const [resultado, setResultado] = useState(null);

    const [controleNumeral, setControleNumeral] = useState(1);

    function handleNumeral(numero) {
        if (controleNumeral === 1) {
            setPrimeiroNumero(primeiroNumero + numero)
        } else {
            setSegundoNumero(segundoNumero + numero)
        }
    }

    function handleOperacao(operacao) {
        setOperador(operacao)
        setControleNumeral(2)
    }

    function handleClear() {
        setPrimeiroNumero('')
        setSegundoNumero('')
        setOperador(null)
        setControleNumeral(1)
    }

    function handleIgual() {
        switch (operador) {
            case '+':
                setResultado(Number(primeiroNumero) + Number(segundoNumero));
                break;
            case '-':
                setResultado(Number(primeiroNumero) - Number(segundoNumero));
                break;
            case '/':
                setResultado(Number(primeiroNumero) / Number(segundoNumero));
                break;
        }
        handleClear()
    }

    return (
        <View style={styles.container}>

            <TelaDeOperacao primeiroNumero={primeiroNumero} segundoNumero={segundoNumero} operador={operador} />

            <View style={styles.containerNumeral}>
                <Botao texto={1} onPressAction={handleNumeral} />
                <Botao texto={2} onPressAction={handleNumeral} />
                <Botao texto={3} onPressAction={handleNumeral} />
            </View>

            <View style={styles.containerNumeral}>
                <Botao texto={'+'} onPressAction={handleOperacao} />
                <Botao texto={'-'} onPressAction={handleOperacao} />
                <Botao texto={'/'} onPressAction={handleOperacao} />
            </View>

            <View style={styles.containerNumeral}>
                <Botao texto={'='} onPressAction={handleIgual} />
                <Botao texto={'C'} onPressAction={handleClear} />
            </View>

            <Resultado resultado={resultado} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 10
    },
    containerNumeral: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
    }
});