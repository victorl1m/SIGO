import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import React, {useState} from 'react';

import {View, Text, StyleSheet, StatusBar, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';


export const AddJob = ({navigation}) => {
  
  const {navigate} = navigation;
  const [CEP, setCEP] = useState();
  
  function getAddress(CEP) {
    fetch(`https://viacep.com.br/ws/${CEP}/json/`).then(response => response.json())
    .then(response => {
      console.log(response.uf)
      console.log(response.localidade)
      console.log(response.logradouro)
      const uf = response.uf
      const city = response.localidade
      const street = response.logradouro
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
      <Text style={styles.addJobText}>Adicionar Obra</Text>
      <Text style={styles.subText}>Informe os dados de sua obra</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Nome da Obra"
      />
      <TextInput
        onChangeText={myCEP => setCEP(myCEP)}
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="CEP"
        onBlur={() => getAddress(CEP)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Estado"
        input value={uf}
      /><TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Cidade"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Logradouro"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Número"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Complemento"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Descrição"
      />
      <Pressable
        onPress={() => {
          navigate('CustomerScreen');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  addJobText: {
    color: '#00b2cb',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    width: '90%',
    height: 80,
    backgroundColor: '#00b2cb',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  subText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 20,
  },
});