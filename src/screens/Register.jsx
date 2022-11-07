import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  SafeAreaView,
} from "react-native";
import { useState } from "react"; 

// firebase authentication
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

export function Register({ navigation }) {
  const { navigate } = navigation;
  const { alert } = Alert;

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

    await createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        updateProfile(user, {
          displayName: formatted,
        })
        alert("Account Created!", `Welcome ${formatted}`);
        navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      })
  }

  return (
    <SafeAreaView  style={styles.registerContainer}>
      <StatusBar style="light" />
        <View style={styles.registerArea}>
            <Text style={styles.registerTitle}>Registrar-se</Text>
            <Text style={styles.registerSubtitle}>Preencha os campos abaixo {'\n'} para criar sua conta</Text>
          <TextInput
            style={styles.registerInput}
            onChangeText={setFirstName}
            placeholder="Nome"
            placeholderTextColor="#AAAAAA"
            keyboardType="name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.registerInput}
            onChangeText={setLastName}
            placeholder="Sobrenome"
            placeholderTextColor="#AAAAAA"
            keyboardType="last-name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.registerInput}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#AAAAAA"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.registerInput}
            onChangeText={setPassword}
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  registerArea: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
    width: "100%",
    height: "100%",
  },
  registerTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 30,
    color: "#00B2CB",
    },
    registerSubtitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    },
  registerInput: {
    backgroundColor: "#1E1E1E",
    width: "90%",
    height: 70,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    color: "#00B2CB",
  },
  signUpbtn: {
    backgroundColor: "#00B2CB",
    width: "90%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "white",
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
  },
});
