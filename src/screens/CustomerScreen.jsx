import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { useEffect, useState, useContext } from 'react';

import {Svg, Path} from 'react-native-svg';

// importing axios api to send the customer data
import { api } from '../api/axios';

// auth context
import {AuthContext} from '../contexts/AuthContext';

import Jobs from '../components/Jobs';

export const CustomerScreen = ({ route, navigation }) => {
  const { navigate } = navigation;
  const { alert } = Alert;

  // getting customer information by route
  const name = route.params.customerName;
  const customerId = route.params.customerId;

  // pulling update state from auth context
  const { update, setUpdate } = useContext(AuthContext);

  const [constructions, setConstructions] = useState([]);

  useEffect(() => {
    // pulling customer constructions
    api.get(`/getConstructions/${customerId}`)
    .then(res => {
      setConstructions(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [update]);

  const customerName = name;
  const pictureProfile = 'https://i.pravatar.cc/150?img=1';

  function handleRemoveCustomer() {
    alert("Hold on!", "Do you really want to delete this user?",  [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {text: 'YES', onPress: () => {

        api.delete(`/deleteCustomer/${customerId}`)
        .then(() => {
          alert("User Deleted.");
          setUpdate(!update);
          navigate("CustomerSelection");
        })
        .catch((error) => {
          console.log(error);
        })
      }},
    ]);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.customerContainer}>
        <Text style={styles.customerText}>{customerName}</Text>
        <Text style={styles.subText}>Menu de Obras</Text>
        <Image source={{uri: pictureProfile}} style={styles.profileImage} />
      </View>
      <View>
        <ScrollView horizontal={true} style={styles.actionArea}>
          <Pressable style={styles.addJobsBtn}>
            <Svg
              width={24}
              height={24}
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <Path d="M12.002 2C17.52 2 22 6.48 22 11.998c0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997C2.005 6.48 6.485 2 12.002 2zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497S16.692 3.5 12.002 3.5zm-.747 7.75h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5a.75.75 0 00-1.5 0z" />
            </Svg>
            <Text style={styles.addText}>Adicionar obra</Text>
          </Pressable>
          <Pressable style={styles.editJobsBtn}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="black"
              viewBox="0 0 24 24">
              <Path d="M1.439 16.873L0 24l7.128-1.437L24.001 5.691l-5.69-5.69L1.439 16.873zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zM21.172 5.689L7.555 19.307l-2.86-2.861L15.52 5.62l2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z" />
            </Svg>
            <Text style={styles.editText}>Editar Perfil</Text>
          </Pressable>
          <Pressable style={styles.removeJobsBtn} onPress={handleRemoveCustomer}>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg">
              <Path d="M12.002 2.005c5.518 0 9.998 4.48 9.998 9.997C22 17.52 17.52 22 12.002 22c-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497S7.312 20.5 12.002 20.5s8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm4.253 7.75h-8.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5z" />
            </Svg>
            <Text style={styles.removeText}>Remover Usuário</Text>
          </Pressable>
        </ScrollView>
      </View>
      { 
        // rendering customers
        constructions.length > 0
        ? constructions.map(customer => (
            <Jobs />
          ))
        : <Text style={styles.noConstructions}>sem construções...</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  // arruma dps

  // noConstructions => linha 
  noConstructions: {
    color: '#FFF',
    fontSize: 25,
    marginLeft: 20
  },

  container: {
    flexDirection: 'column',
    backgroundColor: '#121212',
    width: '100%',
    height: '100%',
  },
  customerText: {
    color: '#00b2cb',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  subText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
  },
  customerContainer: {
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: 160,
    width: 160,
    borderRadius: 200,
    marginTop: 12,
  },
  addJobsBtn: {
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: 140,
    margin: 2,
    backgroundColor: '#00B2CB',
    borderWidth: 2,
    borderRadius: 15,
    height: 35,
  },
  editJobsBtn: {
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: 120,
    margin: 2,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    height: 35,
  },
  removeJobsBtn: {
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: 140,
    margin: 2,
    backgroundColor: '#D92121',
    borderWidth: 2,
    borderRadius: 15,
    height: 35,
  },
  addText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    marginLeft: 2,
    marginRight: 2,
  },
  editText: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    marginLeft: 2,
    marginRight: 2,
  },
  removeText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    marginLeft: 2,
    marginRight: 2,
  },
  actionArea: {
    flexDirection: 'row',
    marginVertical: 12,
    marginLeft: 12,
  },
  textButton: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
});
