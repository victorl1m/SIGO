import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import {useEffect, useState, useContext} from 'react';

import {Svg, Path} from 'react-native-svg';

// importing axios api to send the customer data
import {api} from '../api/axios';

// auth context
import {AuthContext} from '../contexts/AuthContext';

import Jobs from '../components/Jobs';

export const CustomerScreen = ({route, navigation}) => {
  const {navigate} = navigation;
  const {alert} = Alert;

  // getting customer information by route
  const name = route.params.customerName;
  const customerId = route.params.customerId;

  // pulling update state from auth context
  const {update, setUpdate} = useContext(AuthContext);

  const [constructions, setConstructions] = useState([]);

  useEffect(() => {
    // pulling customer constructions
    api
      .get(`/getConstructions/${customerId}`)
      .then(res => {
        setConstructions(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [update]);

  const customerName = name;
  const pictureProfile =
    'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png';

  function handleRemoveCustomer() {
    alert('Hold on!', 'Do you really want to delete this user?', [
      {
        text: 'Cancel',
        onPress: () => null,
      },
      {
        text: 'YES',
        onPress: () => {
          api
            .delete(`/deleteCustomer/${customerId}`)
            .then(() => {
              alert('User Deleted.');
              setUpdate(!update);
              navigate('CustomerSelection');
            })
            .catch(error => {
              console.log(error);
            });
        },
      },
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
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.actionArea}>
          <View style={styles.actionContainer}>
            <Pressable
              onPress={() => {
                navigate('AddJob');
              }}
              style={styles.addJobsBtn}>
              <Svg
                width={16}
                height={16}
                fill="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <Path d="M12.002 2C17.52 2 22 6.48 22 11.998c0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997C2.005 6.48 6.485 2 12.002 2zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497S16.692 3.5 12.002 3.5zm-.747 7.75h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5a.75.75 0 00-1.5 0z" />
              </Svg>
              <Text style={styles.addText}>Adicionar obra</Text>
            </Pressable>
            <Pressable style={styles.editJobsBtn}>
              <Svg
                width={16}
                height={16}
                fill="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <Path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z" />
              </Svg>
              <Text style={styles.editText}>Editar Perfil</Text>
            </Pressable>
            <Pressable
              style={styles.removeJobsBtn}
              onPress={handleRemoveCustomer}>
              <Svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg">
                <Path d="M12.002 2.005c5.518 0 9.998 4.48 9.998 9.997C22 17.52 17.52 22 12.002 22c-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497S7.312 20.5 12.002 20.5s8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm4.253 7.75h-8.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5z" />
              </Svg>
              <Text style={styles.removeText}>Remover cliente</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      {
        // rendering customers
        constructions.length > 0 ? (
          constructions.map(customer => <Jobs />)
        ) : (
          <View style={styles.noConstructionsContainer}>
            <Svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#00b2cb">
              <Path d="M11 24h-6v-17h6v17zm-2-4l-2 1v1l2-1v-1zm2-18h10l3 3v1h-5v6h1v3.396c-1.66.085-2.782.652-3 1.604-.131.574.145 1.553 1.12 1.699.665.1 1.325-.24 1.657-.825.335-.661 1.201-.158.932.45-.429 1.023-1.526 1.676-2.709 1.676-1.656 0-3-1.344-3-3 0-1.305.835-2.417 2-2.829v-2.171h1v-6h-14v3h-4v-7h5v-2h6v2zm-2 15l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1z" />
            </Svg>
            <Text style={styles.noConstructions}>
              Nenhuma obra foi encontrada.
            </Text>
          </View>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  noConstructionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 300,
  },
  // noUsers => linha 178
  noConstructions: {
    fontFamily: 'Montserrat-Bold',
    color: '#00b2cb',
    fontSize: 12,
    marginTop: 12,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    margin: 2,
    backgroundColor: '#00B2CB',
    borderRadius: 10,
    height: 35,
  },
  editJobsBtn: {
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    margin: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 35,
  },
  removeJobsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    margin: 2,
    backgroundColor: '#D92121',
    borderRadius: 10,
    height: 35,
  },
  ConfigBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    margin: 2,
    backgroundColor: '#8e8e8e',
    borderRadius: 10,
    height: 35,
  },
  addText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginLeft: 2,
    marginRight: 2,
  },
  editText: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginLeft: 2,
    marginRight: 2,
  },
  removeText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginLeft: 2,
    marginRight: 2,
  },
  ConfigText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    marginLeft: 2,
    marginRight: 2,
  },
  actionArea: {
    flexDirection: 'row',
    marginTop: 12,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
});
