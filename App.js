import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function App() {

  const [contador, setContador] = useState(0);

  function incrementarOContador(){
    setContador(contador + 1);
  }

  function decrementarOContador(){
    setContador(contador - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>Olá!: {contador}</Text>
        <TouchableOpacity onPress={incrementarOContador} style={styles.botaoVermelho}>
          <Text style={{color:'white'}}>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrementarOContador} style={styles.botaoVermelho}>
          <Text style={{color:'white'}}>Decrementar</Text>
        </TouchableOpacity>
    </View>
  );
}
