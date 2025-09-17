import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function App() {


  return (
    <View style={styles.container}>
      
      <View style={styles.telaDeResultado}>
        <Text style={{fontSize:80}}>1</Text>
        <Text style={{fontSize:80}}>+</Text>
        <Text style={{fontSize:80}}>2</Text>
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral}>
          <Text style={{fontSize:80}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral}>
          <Text style={{fontSize:80}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral}>
          <Text style={{fontSize:80}}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral}>
          <Text style={{fontSize:80}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral}>
          <Text style={{fontSize:80}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral}>
          <Text style={{fontSize:80}}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerNumeral}>
        <TouchableOpacity style={styles.botaoNumeral}>
          <Text style={{fontSize:80}}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeral}>
          <Text style={{fontSize:80}}>C</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}
