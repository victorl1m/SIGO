import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

export function Profile() {
  return (
    <SafeAreaView style={styles.profileContainer}>
      <StatusBar style="light"/>
      <View style={styles.profileArea}>
      <View>
        <Text style={styles.profileTitle}>Seu Perfil</Text>
        <Image source={require("C:\Users\Hyatho\Downloads\perfil-300x300-4.jpg")}></Image>
      </View>
      <View>
        <Text style={styles.profileName}>Victor Lima</Text>
        <Text style={styles.profileEmail}>trackedby1@gmail.com</Text>
      </View>
      <View>
        <Text style={styles.changePassword}>Altera Senha</Text>
        <Text style={styles.changeData}>Alterar dados pessoais</Text>
        <Text style={styles.solutionProblem}>Solução de problemas</Text>
        <Text style={styles.changeTheme}>Altera tema</Text>
      </View>
      <Text  style={styles.privacyTerms}>Privacidade & Termos</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  profileContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
  }

});