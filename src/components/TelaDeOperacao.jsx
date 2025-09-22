import React from 'react-native'
import { Text, StyleSheet, View } from 'react-native'

export default function TelaDeOperacao({primeiroNumero, operador, segundoNumero}) {

    return(
        <View style={styles.telaDeResultado}>
            <Text style={styles.texto}>{primeiroNumero}</Text>
            <Text style={styles.texto}>{operador}</Text>
            <Text style={styles.texto}>{segundoNumero}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  telaDeResultado: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10
  },
  texto: {
    fontSize: 40
  }
});