import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import { useState, useContext } from 'react';

// importing axios api to send the customer data
import { api } from '../api/axios';

// auth context
import { AuthContext } from '../contexts/AuthContext';

export const AddJob = ({ route, navigation }) => {
  const customerId = route.params.customerId;
  const customerName = route.params?.customerName;
  
  const {navigate} = navigation;

  // pulling user from auth context
  const {update, setUpdate} = useContext(AuthContext);

  const [constructionName, setConstructionName] = useState('')
  const [addressInfo, setAddressInfo] = useState('');
  
  function getAddress(CEP) {
    fetch(`https://viacep.com.br/ws/${CEP}/json/`).then(res => res.json())
    .then(res => {
      setAddressInfo(res);
    });
  }

  function createConstruction() {
    api.post("/createNewConstruction", {
      customerId,
      constructionName
    })
    .then(() => {
      navigate('CustomerScreen', { 
        customerId: customerId,
        customerName: customerName
      });
      setUpdate(!update);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
      <Text style={styles.addJobText}>Adicionar Obra</Text>
      <Text style={styles.subText}>Informe os dados de sua obra</Text>

      <TextInput
        onChangeText={setConstructionName}
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Nome da Obra"
        value={constructionName}
      />
      <TextInput
        onChangeText={setAddressInfo}
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="CEP"
        onBlur={() => getAddress(addressInfo)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Estado"
        value={addressInfo?.uf}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Cidade"
        value={addressInfo?.localidade}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder="Logradouro"
        value={addressInfo?.logradouro}
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
        onPress={createConstruction}
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