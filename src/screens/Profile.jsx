import React from "react";
import { View, Text, Button } from "react-native";

export function Profile() {
  return (
    <View style={style.container}>
      <View>
        <Button title="go back"
                onPress={goBack}/>

        <Text>Seu Perfil</Text>
      </View>
      <View>
        <Text>Victor Lima</Text>
        <Text>trackedby1@gmail.com</Text>
      </View>
      <View>
        <Text>Altera Senha</Text>
        <Text>Alterar dados pessoais</Text>
        <Text>Solução de problemas</Text>
        <Text>Altera tema</Text>
      </View>
      <View>Privacidade & Termos</View>
    </View>
  );
}
