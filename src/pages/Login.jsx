import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function showDados() {
        Alert.alert('Boas Vindas', `Olá ${usuario}`,[
            {
                text: 'Um botão', 
                onPress: () => console.log('Ok Pressionado'),
            }
        ]);
    }

    return (
        <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text>Usuário:</Text>
            <TextInput style={{
                height: 80,
                width: '100%',
                padding: 10,
                borderWidth: 1,
                fontSize: 50
            }}
                onChangeText={setUsuario}
            />

            <Text>Senha:</Text>
            <TextInput style={{
                height: 80,
                width: '100%',
                padding: 10,
                borderWidth: 1,
                fontSize: 50,
                marginBottom: 30
            }}
                secureTextEntry={true}
                onChangeText={setSenha}
            />

            <Button title="Entrar" onPress={showDados} />


        </View>
    )
}


