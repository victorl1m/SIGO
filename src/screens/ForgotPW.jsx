import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export function ForgotPW() {
  return (
    <SafeAreaView style={styles.forgotContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.forgotArea}>
        <Text style={styles.forgotTitle}>Esqueci minha senha</Text>
        <Text style={styles.forgotSubtitle}>
          Preencha o campo abaixo com seu e-mail {'\n'} para recuperar a sua
          senha
        </Text>
        <TextInput
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
  forgotArea: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
    width: '100%',
    height: '100%',
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
