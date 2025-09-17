import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function App() {

  const [primeiroNumero, setPrimeiroNumero] = useState('');
  const [segundoNumero, setSegundoNumero] = useState('');
  const [operador, setOperador] = useState(null);
  const [resultado, setResultado] = useState(null);

  const [controleNumeral, setControleNumeral] = useState(1);

  function handleNumeral(numero){
    if(controleNumeral===1){
      setPrimeiroNumero(primeiroNumero  + numero)
    }else{
      setSegundoNumero(segundoNumero  + numero)
    }
  }

  function handleOperacao(operacao){
    setOperador(operacao)
    setControleNumeral(2)
  }

  function handleClear(){
    setPrimeiroNumero('')
    setSegundoNumero('')
    setOperador(null)
    setControleNumeral(1)
  }

  function handleIgual(){
    switch(operador){
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
      
      <View style={styles.telaDeResultado}>
        <Text style={{fontSize:80}}>{primeiroNumero}</Text>
        <Text style={{fontSize:80}}>{operador}</Text>
        <Text style={{fontSize:80}}>{segundoNumero}</Text>
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleNumeral(1)}>
          <Text style={{fontSize:80}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleNumeral(2)}>
          <Text style={{fontSize:80}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleNumeral(3)}>
          <Text style={{fontSize:80}}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral}  onPress={()=> handleOperacao('+')}>
          <Text style={{fontSize:80}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleOperacao('-')}>
          <Text style={{fontSize:80}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={()=> handleOperacao('/')}>
          <Text style={{fontSize:80}}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral} onPress={handleIgual}>
          <Text style={{fontSize:80}}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral} onPress={handleClear}>
          <Text style={{fontSize:80}}>C</Text>
        </TouchableOpacity>
      </View>

      <Text style={{fontSize:80}}>
        {resultado}
      </Text>


    </View>
  );
}
