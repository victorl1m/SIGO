import { View, Text, TextInput, StyleSheet, Pressable, Image } from "react-native";
import React, { useState } from "react";

import statisticsIcon from '../assets/icon/statistics-icon.png'
import financialIcon from '../assets/icon/financial-icon.png'
import arrowDropDownIcon from '../assets/icon/arrowDropDown-icon.png'

export const ClientSelection = () => {
  const [visible, setVisible] = useState(true);

  const handleDropDown = () => setVisible(!visible);

  return (
    <View>
      <View style={styles.welcomeUser}>
        <Text style={{ fontWeight: "900" }}>Bem-vindo, Victor Lima</Text>
        <View style={styles.photoUser}></View>
      </View>

      <View style={styles.dropDown}>
        <Text style={styles.dropDownText} onPress={handleDropDown}>
          Seus Clientes
        </Text>
        <Image source={arrowDropDownIcon} style={styles.dropDownArrow} />
      </View>


      {visible ? (
        <View style={styles.content}>
          <Text style={{ color: "rgba(0, 0, 0, .5)" }}>
            Todos os seus clientes estão aqui!
          </Text>
          <TextInput style={styles.input} placeholder="Pesquisar" />
          <Client nameUser="João Victor" />
          <Client nameUser="Luiz Oliveira" />
          <Client nameUser="Marcos" />
        </View>
        ) : 
        null}
    </View>
  );
};

const Client = ({nameUser}) => {
  return (
    <View style={styles.client}>
      <View style={styles.rowAboutClient}>
        <View style={styles.photoUser}></View>
        <Text style={styles.nameUser}>{nameUser}</Text>
        <View style={styles.progressBarUser}></View>
        <Text style={styles.numberProgressUser}>10%</Text>
      </View>
      <View style={styles.rowAboutClient}>
        <Pressable style={styles.aboutClientButton}>
          <Image source={statisticsIcon} style={{width: 10, height: 10}} />
          <Text style={styles.aboutClientButtonText}>Estatísticas</Text>
        </Pressable>
        <Pressable style={styles.aboutClientButton}>
          <Image source={financialIcon} style={{width: 10, height: 12}} />
          <Text style={styles.aboutClientButtonText}>Financeiro</Text>
        </Pressable>
        <Pressable style={styles.accessButton}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: "#00B2CB" }}>
            Acessar
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeUser: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  dropDown: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 10
  },  

  dropDownText: {
    fontSize: 18,
    fontWeight: 700,
    color: "#00B2CB",
    width: "max-content",
    padding: 5,
  },

  dropDownArrow: {
    width: 6,
    height: 6,
  },  

  input: {
    border: "none",
    borderRadius: "15px",
    padding: 10,
    backgroundColor: "#D9D9D9",
    width: "75%",
    color: "rgba(0, 0, 0, .5)",
    marginTop: "10px",
  },

  client: {
    backgroundColor: "#00B2CB",
    color: "white",
    borderRadius: "10px",
    width: "95%",
    maxWidth: "340px",
    padding: 10,
    marginTop: 15,
  },

  rowAboutClient: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },

  photoUser: {
    width: 32,
    height: 32,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
  },

  nameUser: {
    fontSize: "14px",
    color: "white",
    width: '80px'
  },

  progressBarUser: {
    display: "block",
    width: "40%",
    height: 5,
    borderRadius: 25,
    flexGrow: 0,
    backgroundColor: "#D9D9D9",
    marginLeft: "5%",
  },

  numberProgressUser: {
    fontWeight: 700,
    fontSize: 18,
    color: "white",
  },

  aboutClientButton: {
    backgroundColor: "#00B2CB",
    maxWidth: "max-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    marginRight: 8,
  },

  aboutClientButtonText: {
    color: "white",
    margin: 3,
    fontSize: 14,
  },

  accessButton: {
    color: "#00B2CB",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "white",
    borderRadius: 5,
    maxWidth: "max-content",
  },
});
