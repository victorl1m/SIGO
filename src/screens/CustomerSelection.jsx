import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import Svg, { Path } from "react-native-svg";

export const CustomerSelection = ({ navigation }) => {
  const { navigate } = navigation;

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
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
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
      <View style={styles.additionalArea}>
        <TextInput
          placeholder="Pesquisar"
          placeholderTextColor={"white"}
          style={styles.searchbox}
        ></TextInput>
        <Pressable
          onPress={() => {
            navigate("AddCustomer");
          }}
        >
          <Svg
            style={styles.addIcon}
            width={32}
            height={32}
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M15.114 25.719a7.533 7.533 0 01-1.04-1.35c-.655.085-1.348.131-2.074.131-5.111 0-8.5-2.111-8.5-4.785V19l.007-.145A1.5 1.5 0 015 17.5h8.624A7.486 7.486 0 0114.5 16H5a3 3 0 00-3 3v.715C2 23.433 6.21 26 12 26c1.101 0 2.145-.098 3.114-.281zM18 8A6 6 0 106 8a6 6 0 0012 0zM7.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm13 19a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-11a.5.5 0 01.5.5V20h3.5a.5.5 0 010 1H21v3.5a.5.5 0 01-1 0V21h-3.5a.5.5 0 010-1H20v-3.5a.5.5 0 01.5-.5z"
              fill="white"
            />
          </Svg>
        </Pressable>
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
  addIcon: {
    marginRight: 12,
  },
  additionalArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    width: 36,
    height: 36,
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
    width: "80%",
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
