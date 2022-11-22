import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useState} from 'react';

// firebase
import auth from '@react-native-firebase/auth';

export function Register({navigation}) {
  const {navigate} = navigation;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');

  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  async function handleRegister() {
    // Capitalize name
    const unformatted = `${firstName} ${lastName}`;
    const formatted = unformatted
      .split(' ')
      .map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      })
      .join(' ');

    if (password !== comfirmPassword) {
      setError(true);
      setMessageError('Senhas não correspondem');
      setEmailError(false);
      setPasswordError(true);
    } else {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {
          await user.updateProfile({
            displayName: formatted,
          });
        })
        .catch(error => {
          setError(true);

          switch (error.message) {
            case '[auth/weak-password] The given password is invalid. [ Password should be at least 6 characters ]':
              setMessageError(
                'Formato de senha invalido. Precisa ter no mínimo 6 digitos',
              );
              setEmailError(false);
              setPasswordError(true);
              break;
            case '[auth/invalid-email] The email address is badly formatted.':
              setMessageError('Formato de email inválido');
              setPasswordError(false);
              setEmailError(true);
              break;
            case '[auth/email-already-in-use] The email address is already in use by another account.':
              setMessageError('Este email já esta em uso');
              setPasswordError(false);
              setEmailError(true);
              break;
            default:
              break;
          }
        });
    }
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
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={setLastName}
          style={styles.registerInput}
          placeholder="Sobrenome"
          placeholderTextColor="#AAAAAA"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={setEmail}
          style={emailError ? styles.registerInputError : styles.registerInput}
          placeholder="Email"
          placeholderTextColor="#AAAAAA"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={setPassword}
          style={
            passwordError ? styles.registerInputError : styles.registerInput
          }
          placeholder="Senha"
          placeholderTextColor="#AAAAAA"
          secureTextEntry={true}
          keyboardType="visible-password"
        />
        <TextInput
          onChangeText={setComfirmPassword}
          style={
            passwordError ? styles.registerInputError : styles.registerInput
          }
          placeholder="Confirmar senha"
          placeholderTextColor="#AAAAAA"
          secureTextEntry={true}
          keyboardType="visible-password"
        />
        <Pressable style={styles.signUpbtn} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
      </View>

      <View style={error ? styles.foudError : styles.noError}>
        <Text style={styles.errorMessage}>{messageError}</Text>
        <Pressable
          style={styles.comfirmErrorButton}
          onPress={() => setError(false)}>
          <Text style={styles.comfirmErrorButtonOk}>Ok</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
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

  registerInputError: {
    backgroundColor: '#1E1E1E',
    width: '90%',
    height: 70,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: '#00B2CB',
    borderColor: 'red',
    borderWidth: 1,
  },
  noError: {
    display: 'none',
  },
  foudError: {
    position: 'absolute',
    top: '30%',
    right: '10%',
    backgroundColor: '#121212',
    width: 300,
    minHeight: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 17,
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    textAlign: 'center',
  },
  comfirmErrorButton: {
    backgroundColor: '#00B2CB',
    width: '50%',
    marginTop: 40,
    flex: 0.3,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comfirmErrorButtonOk: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
  },
});
