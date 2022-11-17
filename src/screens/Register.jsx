import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useState } from 'react';

// firebase
import auth from "@react-native-firebase/auth";

export function Register({ navigation }) {
  const { navigate } = navigation;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    // Capitalize name
    const unformatted = `${firstName} ${lastName}`
    const formatted = unformatted.split(' ').map(name => {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }).join(' ');

    await auth().createUserWithEmailAndPassword(email, password)
      .then(async () => {
        await auth().currentUser.updateProfile({
          displayName: formatted,
        }).then(() => {
          navigate("CustomerSelection");
        })
      })
      .catch(error => {
        console.error(error);
      });
  }


  return (
    <SafeAreaView style={styles.registerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.registerArea}>
        <Text style={styles.registerTitle}>Registrar-se</Text>
        <Text style={styles.registerSubtitle}>
          Preencha os campos abaixo {'\n'} para criar sua conta
        </Text>
        <TextInput
          onChangeText={setFirstName}
          style={styles.registerInput}
          placeholder="Nome"
          placeholderTextColor="#AAAAAA"
          keyboardType="name"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={setLastName}
          style={styles.registerInput}
          placeholder="Sobrenome"
          placeholderTextColor="#AAAAAA"
          keyboardType="last-name"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={setEmail}
          style={styles.registerInput}
          placeholder="Email"
          placeholderTextColor="#AAAAAA"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={setPassword}
          style={styles.registerInput}
          placeholder="Senha"
          placeholderTextColor="#AAAAAA"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Confirmar senha"
          placeholderTextColor="#AAAAAA"
          secureTextEntry={true}
        />
        <Pressable style={styles.signUpbtn} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  registerArea: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    width: '100%',
    height: '100%',
  },
  registerTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: '#00B2CB',
  },
  registerSubtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  registerInput: {
    backgroundColor: '#1E1E1E',
    width: '90%',
    height: 70,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: '#00B2CB',
  },
  signUpbtn: {
    backgroundColor: '#00B2CB',
    width: '90%',
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
  },
  errorInput: {
    borderColor: '#CD0000',
    borderWidth: 1,
    backgroundColor: '#1E1E1E',
    width: '90%',
    height: 70,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: '#00B2CB',
  },
});
