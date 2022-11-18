import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';

export const AddCustomer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titlePage}>Seu cliente</Text>
          <Text style={styles.subTitle}>Informe os dados de seu cliente</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.inputNameLastName}
            placeholder="Nome"
            placeholderTextColor="#BEBEBE"
          />
          <TextInput
            style={styles.inputNameLastName}
            placeholder="Sobrenome"
            placeholderTextColor="#BEBEBE"
          />
          <TextInput
            style={styles.inputCpf}
            placeholder="CPF"
            placeholderTextColor="#BEBEBE"
          />
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            placeholderTextColor="#BEBEBE"
          />
          <TextInput
            style={styles.inputDDD}
            placeholder="DDD"
            placeholderTextColor="#BEBEBE"
          />
          <TextInput
            style={styles.inputCelular}
            placeholder="Celular"
            placeholderTextColor="#BEBEBE"
          />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
  },

  header: {
    marginTop: 12,
  },

  titlePage: {
    color: '#00B2CB',
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },

  subTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
  },

  form: {
    flex: 0.7,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  inputNameLastName: {
    backgroundColor: '#1E1E1E',
    color: '#00B2CB',
    width: '49%',
    height: 70,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 10,
  },

  inputCpf: {
    backgroundColor: '#1E1E1E',
    width: '100%',
    marginTop: 6,
    height: 70,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 10,
  },

  inputEmail: {
    backgroundColor: '#1E1E1E',
    width: '100%',
    marginTop: 6,
    height: 70,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 10,
  },

  inputDDD: {
    backgroundColor: '#1E1E1E',
    width: '29%',
    marginTop: 6,
    height: 70,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 10,
  },

  inputCelular: {
    backgroundColor: '#1E1E1E',
    width: '69%',
    marginTop: 6,
    height: 70,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 10,
  },

  button: {
    backgroundColor: '#00B2CB',
    borderRadius: 15,
    color: 'white',
    flex: 0.13,
    justifyContent: 'center',
  },

  textButton: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
});
