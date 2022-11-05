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

export function Register({ navigation }) {
  function goBack() {
    const { navigate } = navigation;
    navigate("Login");
  }

  return (
    <SafeAreaView style={styles.registerContainer}>
      <StatusBar style="light" />
        <View style={styles.registerArea}>
            <Text style={styles.registerTitle}>Registrar-se</Text>
            <Text style={styles.registerSubtitle}>Preencha os campos abaixo {'\n'} para criar sua conta</Text>
          <TextInput
            style={styles.registerInput}
            placeholder="Nome"
            placeholderTextColor="#AAAAAA"
            keyboardType="name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.registerInput}
            placeholder="Sobrenome"
            placeholderTextColor="#AAAAAA"
            keyboardType="last-name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.registerInput}
            placeholder="Email"
            placeholderTextColor="#AAAAAA"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
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
          <Pressable style={styles.signUpbtn}>
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
