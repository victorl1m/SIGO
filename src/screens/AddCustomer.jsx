import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useContext } from "react";
import { FontContext } from "../contexts/FontContext";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const AddCustomer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.addText}>Adicionar Cliente</Text>
        <View style={styles.userTypeArea}>
          <BouncyCheckbox
            size={18}
            fillColor="#00B2CB"
            unfillColor="transparent"
            backgroundColor="red"
            iconStyle={{ borderColor: "#00B2CB" }}
            innerIconStyle={{ borderWidth: 2 }}
          />
          <BouncyCheckbox
            size={18}
            fillColor="#00B2CB"
            unfillColor="transparent"
            iconStyle={{ borderColor: "#00B2CB" }}
            innerIconStyle={{ borderWidth: 2 }}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Nome"
            placeholderTextColor="#AAAAAA"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="CPF"
            placeholderTextColor="#AAAAAA"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  userTypeArea: {
    flexDirection: "row",
    width: "100%",
    marginTop: 24,
    },
  addText: {
    color: "#00B2CB",
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
  },
  infoText: {
    color: "white",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginTop: 2,
    textAlign: "center",
  },
  inputContainer: {
    width: "90%",
    height: 70,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  inputText: {
    color: "#00B2CB",
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    marginLeft: 12,
  },
});
