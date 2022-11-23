import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from 'react-native';

import React from 'react';

export default function ModalForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.forgotContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.forgotArea}>
        <Text style={styles.forgotTitle}>Esqueci minha senha</Text>
        <Text style={styles.forgotSubtitle}>
          Preencha o campo abaixo com seu e-mail {'\n'} para recuperar a sua
          senha
        </Text>
        <TextInput
          onChangeText={setEmail}
          style={styles.forgotInput}
          placeholder="Email"
          placeholderTextColor="#AAAAAA"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}></TextInput>
        <Pressable style={styles.forgotBtn}>
          <Text style={styles.buttonText}>Recuperar acesso</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forgotContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    paddingVertical: 24,
  },
  forgotArea: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    width: '100%',
    height: '100%',
    marginVertical: 24,
  },
  forgotTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: '#00B2CB',
  },
  forgotSubtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  forgotInput: {
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
  forgotBtn: {
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
});
