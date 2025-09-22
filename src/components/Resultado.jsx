import React from 'react-native'
import { Text, StyleSheet } from 'react-native'

export default function Resultado({resultado}) {

    return(
        <Text style={styles.texto}>
            {resultado}
        </Text>
    )
}

const styles = StyleSheet.create({
    texto: { fontSize: 80 }
});