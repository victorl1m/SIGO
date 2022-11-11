import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  BackHandler,
  Alert,
  SafeAreaView,
  StatusBar,
  ScrollView
} from "react-native";
import React, { useCallback, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FontContext } from "../contexts/FontContext";

export const CustomerSelection = () => {
  const { alert } = Alert;

  const { onLayoutRootView } = useContext(FontContext);

  // preventing back button
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => false,
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);

        return true;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    })
  );
  
  const userName = "Victor Lima";
  const userImage = "https://i.imgur.com/GpduYfh.jpg";
  const indicator = ">";

  // =======================================================================================================
  //       ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Greetings, John Doe!
  // =======================================================================================================
  var hours = new Date().getHours();

  if (hours < 12) {
    var greeting = "Bom dia";
  } else if (hours >= 12) {
    var greeting = "Boa tarde";
  } else if (hours >= 17) {
    var greeting = "Boa noite";
  }
// =======================================================================================================
//       ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀View Component
// =======================================================================================================
    return (
      <ScrollView onLayout={onLayoutRootView} style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.yourJobs}>
              <Text style={styles.indicator}>{indicator}</Text>
              <Text style={styles.headerText}>Seus trabalhos</Text>
            </View>
            <Image style={styles.userImage} source={{ uri: userImage }} />
          </View>
        </View>
        <View style={styles.userArea}>
          <View>
            <Text style={styles.userText}>{greeting},</Text>
            <Text style={styles.userName}>{userName} 👋</Text>
          </View>
        </View>
        <View style={styles.btnOptions}>
          <Pressable style={styles.btnSelected}>
            <Text style={styles.btnText}>Visão Geral</Text>
          </Pressable>
          <Pressable style={styles.btnOption}>
            <Text style={styles.btnText}>Suas obras</Text>
          </Pressable>
        </View>
        <View>
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor={"white"}
            style={styles.searchbox}
          ></TextInput>
        </View>
        <Customer />
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    flexDirection: "column",
  },
  header: {
    textAlign: "left",
    marginTop: 24,
    padding: 12,
  },
  yourJobs: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  indicator: {
    color: "#00b2bc",
  },
  headerText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    color: "#FFFFFF",
  },
  userArea: {
    width: "100%",
    padding: 12,
    borderRadius: 15,
    flexDirection: "row",
  },
  userText: {
    color: "white",
    fontSize: 32,
    fontFamily: "Montserrat-Bold",
    marginRight: 6,
  },
  userName: {
    color: "white",
    fontSize: 32,
    fontFamily: "Montserrat-Medium",
  },
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 12,
  },
  btnOption: {
    borderColor: "transparent",
    borderWidth: 2,
    borderRadius: 15,
    padding: 12,
    marginRight: 4,
    alignItems: "center",
  },
  btnSelected: {
    backgroundColor: "#00b2bc",
    borderColor: "#00b2bc",
    borderWidth: 2,
    borderRadius: 15,
    padding: 12,
    marginRight: 4,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
  },
  btnOptions: {
    flexDirection: "row",
    padding: 12,
  },
  searchbox: {
    backgroundColor: "#1e1e1e",
    borderRadius: 15,
    padding: 12,
    margin: 10,
    color: "white",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
});

// =======================================================================================================
//       ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Customer Component
// =======================================================================================================

export default function Customer() {
  const customerName = "Jane Doe";
  const customerImage = "https://i.pravatar.cc/150?img=1";
  const totalJobs = "3";
  const totalTasks = "12";
  const jobValue = "R$ 100.000,00";

  return (
    <SafeAreaView style={customer.container}>
      <View style={customer.customerArea}>
      <Image style={customer.image} source={{ uri: customerImage }} />
      <Text style={customer.nameText}>{customerName}</Text>
      </View>

      <View style={customer.jobsArea}>
        <View style={customer.typeBg}>
        <Text style={customer.jobsNumber}>{totalJobs}</Text>
        <Text style={customer.jobsText}>Obras</Text>
        </View>

        <View style={customer.typeBg}>
        <Text style={customer.tasksNumber}>{totalTasks}</Text>
        <Text style={customer.tasksText}>Tarefas restantes</Text>
        </View>

        <View style={customer.typeBg}>
        <Text style={customer.valueNumber}>{jobValue}</Text>
        <Text style={customer.valueText}>Valor total</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const customer = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 12,
    backgroundColor: "#1e1e1e",
    borderRadius: 15,
    marginHorizontal: 12,
  },
  text: {
    color: "white",
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 24,
    marginRight: 12,
  },
  nameText: {
    color: "white",
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
  customerArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobsArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 12,
    marginTop: 12,
  },
  typeBg: {
    backgroundColor: "#121212",
    borderRadius: 15,
    padding: 8,
    alignItems: "center",
  },
  jobsNumber: {
    color: "#FFA500",
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
  },
  tasksNumber: {
    color: "yellow",
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
  },
  valueNumber: {
    color: "green",
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
  },
  jobsText: {
    color: "#FFA500",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  tasksText: {
    color: "yellow",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  valueText: {
    color: "green",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
});
