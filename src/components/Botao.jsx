import React from 'react-native'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Botao({texto, onPressAction}) {

    return(
        <TouchableOpacity style={styles.botaoNumeral} onPress={() => onPressAction(texto)}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  botaoNumeral: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 20,
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 40
  }
});