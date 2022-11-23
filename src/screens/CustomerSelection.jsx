import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
  ScrollView,
  BackHandler,
  Alert,
  Modal,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

// importing axios api to send the customer data
import {api} from '../api/axios';

// auth context
import {AuthContext} from '../contexts/AuthContext';
import {useCallback, useContext, useEffect, useState} from 'react';
import Svg, {Path} from 'react-native-svg';

export const CustomerSelection = ({navigation}) => {
  const {navigate} = navigation;
  const [modalVisible, setModalVisible] = useState(false);

  // pulling user from auth context
  const {user, update} = useContext(AuthContext);

  // setting customers data
  const [customers, setCustomers] = useState([]);

  // defining back button behavior
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  useEffect(() => {
    if (!user) navigate('Login');
    const architectId = user.uid;

    api
      .get(`/getUserCustomers/${architectId}`)
      .then(res => {
        setCustomers(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [update]);

  const userName = user?.displayName;
  const userImage =
    'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png';

  var hours = new Date().getHours();

  if (hours < 12) {
    var greeting = 'Bom dia';
  } else if (hours >= 12) {
    var greeting = 'Boa tarde';
  } else if (hours >= 17) {
    var greeting = 'Boa noite';
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={modal.modalContainer}>
          <Svg
            width={72}
            height={72}
            fill="red"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <Path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" />
          </Svg>
          <Text style={modal.modalText}>Sair do aplicativo</Text>
          <Text style={modal.modalSubText}>
            Deseja realmente sair do aplicativo?
          </Text>
          <View style={modal.modalBtnContainer}>
            <Pressable
              style={modal.modalBtnCancel}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={modal.modalBtnTextCancel}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={modal.modalBtnContinue}
              onPress={() => handleRemoveCustomer()}>
              <Text style={modal.modalBtnTextContinue}>Remover</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.yourJobs}>
            <Svg
              width={16}
              height={16}
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <Path d="m10.5 17.25c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75zm-1.5-3.55c0-.53-.47-1-1-1h-5c-.53 0-1 .47-1 1v4.3c0 .53.47 1 1 1h5c.53 0 1-.47 1-1zm1.5-1.7c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75zm-1.5-6c0-.53-.47-1-1-1h-5c-.53 0-1 .47-1 1v4.3c0 .53.47 1 1 1h5c.53 0 1-.47 1-1zm1.5.75c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75z" />
            </Svg>
            <Text style={styles.headerText}>Seus clientes</Text>
          </View>
          <Pressable>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <Path d="M2.179 10.201c.055-.298.393-.734.934-.59a.752.752 0 01.543.86c-.077.529-.141.853-.141 1.529 0 4.47 3.601 8.495 8.502 8.495 2.173 0 4.241-.84 5.792-2.284l-1.251-.341a.751.751 0 01.389-1.449l3.225.864a.752.752 0 01.53.919l-.875 3.241a.75.75 0 11-1.449-.388l.477-1.77a10.028 10.028 0 01-6.838 2.708c-5.849 0-9.968-4.8-10.002-9.93a9.987 9.987 0 01.164-1.864zm19.672 3.6c-.054.298-.392.734-.933.59a.75.75 0 01-.543-.86c.068-.48.139-.848.139-1.53 0-4.479-3.609-8.495-8.5-8.495A8.526 8.526 0 006.22 5.791l1.251.341a.75.75 0 11-.388 1.448l-3.225-.864a.75.75 0 01-.53-.918l.875-3.241a.75.75 0 111.449.388l-.478 1.769a10.034 10.034 0 016.839-2.708c5.865 0 10.002 4.83 10.002 9.995a9.97 9.97 0 01-.164 1.8z" />
            </Svg>
          </Pressable>
          <Pressable
            onPress={() => {
              navigate('Profile');
            }}>
            <Image style={styles.userImage} source={{uri: userImage}} />
          </Pressable>
        </View>
      </View>
      <View style={styles.userArea}>
        <Text style={styles.userText}>{greeting},</Text>
        <Text style={styles.userName}>{userName} 👋</Text>
      </View>
      <View style={styles.customerBtnArea}>
        <Pressable
          onPress={() => {
            navigate('AddCustomer');
          }}
          style={styles.addCustomerBtn}>
          <Svg
            width={24}
            height={24}
            fill="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <Path d="M12.002 2C17.52 2 22 6.48 22 11.998c0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997C2.005 6.48 6.485 2 12.002 2zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497S16.692 3.5 12.002 3.5zm-.747 7.75h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5a.75.75 0 00-1.5 0z" />
          </Svg>
          <Text style={styles.addCustomerText}>Adicionar cliente</Text>
        </Pressable>
        <Pressable style={styles.changeViewBtn}>
          <Svg
            width={24}
            height={24}
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <Path d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.346 6.999c-.052.001-.104.001-.156.001-4.078 0-7.742-3.093-9.854-6.483-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 4.143 0 7.796 3.09 9.864 6.493.092.156.138.332.138.507s-.046.351-.138.507l-.008.013c-1.079-1.18-2.631-1.92-4.354-1.92-.58 0-1.141.084-1.671.24-.498-1.643-2.025-2.84-3.829-2.84-2.208 0-4 1.792-4 4 0 2.08 1.591 3.792 3.622 3.982-.014.171-.022.343-.022.518 0 .893.199 1.74.554 2.499zm3.071-2.023 1.442 1.285c.095.085.215.127.333.127.136 0 .271-.055.37-.162l2.441-2.669c.088-.096.131-.217.131-.336 0-.274-.221-.499-.5-.499-.136 0-.271.055-.37.162l-2.108 2.304-1.073-.956c-.096-.085-.214-.127-.333-.127-.277 0-.5.224-.5.499 0 .137.056.273.167.372zm-3.277-2.477c-1.356-.027-2.448-1.136-2.448-2.499 0-1.38 1.12-2.5 2.5-2.5 1.193 0 2.192.837 2.44 1.955-1.143.696-2.031 1.768-2.492 3.044z" />
          </Svg>
          <Text style={styles.changeViewText}>Mudar visualização</Text>
        </Pressable>
      </View>
      {customers.length > 0 ? (
        customers.map(customer => (
          <Pressable
            style={styles.customerSpacing}
            key={customer.id}
            onPress={() =>
              navigate('CustomerScreen', {
                customerId: customer.id,
                customerName: customer.customer_name,
              })
            }>
            <Customer name={customer.customer_name} />
          </Pressable>
        ))
      ) : (
        <View style={styles.noUsersContainer}>
          <Svg
            viewBox="0 0 24 24"
            width={48}
            height={48}
            fill="#00b2cb"
            xmlns="http://www.w3.org/2000/svg">
            <Path d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.346 6.999c-.052.001-.104.001-.156.001-4.078 0-7.742-3.093-9.854-6.483-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 4.143 0 7.796 3.09 9.864 6.493.092.156.138.332.138.507 0 .179-.062.349-.15.516-1.079-1.178-2.629-1.916-4.35-1.916-.58 0-1.141.084-1.671.24-.498-1.643-2.025-2.84-3.829-2.84-2.208 0-4 1.792-4 4 0 2.08 1.591 3.792 3.622 3.982-.014.171-.022.343-.022.518 0 .893.199 1.74.554 2.499zm6.053-2.499s.642-.642 1.061-1.061c.187-.187.187-.519 0-.707-.188-.187-.52-.187-.707 0-.419.419-1.061 1.061-1.061 1.061s-.642-.642-1.061-1.061c-.187-.187-.519-.187-.707 0-.187.188-.187.52 0 .707.419.419 1.061 1.061 1.061 1.061s-.642.642-1.061 1.061c-.187.187-.187.519 0 .707.188.187.52.187.707 0 .419-.419 1.061-1.061 1.061-1.061s.642.642 1.061 1.061c.187.187.519.187.707 0 .187-.188.187-.52 0-.707-.419-.419-1.061-1.061-1.061-1.061zm-6.259-2.001c-1.356-.027-2.448-1.136-2.448-2.499 0-1.38 1.12-2.5 2.5-2.5 1.193 0 2.192.837 2.44 1.955-1.143.696-2.031 1.768-2.492 3.044z" />
          </Svg>
          <Text style={styles.noUsersText}>Nenhum cliente foi encontrado.</Text>
          <Text style={styles.noUsersSubtext}>
            Adicione um cliente clicando no botão acima.
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // arruma dps
  noUsersContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 500,
  },
  // noUsers => linha 178
  noUsersText: {
    fontFamily: 'Montserrat-Bold',
    color: '#00b2cb',
    fontSize: 12,
  },
  noUsersSubtext: {
    fontFamily: 'Montserrat-Medium',
    color: '#00b2cb',
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'left',
    marginTop: 24,
    padding: 12,
  },
  addIcon: {
    marginRight: 12,
  },
  additionalArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourJobs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 6,
  },
  userArea: {
    width: '100%',
    padding: 12,
    borderRadius: 15,
    flexDirection: 'column',
  },
  userText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    marginRight: 6,
  },
  userName: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Montserrat-Medium',
  },
  userImage: {
    width: 36,
    borderWidth: 2,
    borderColor: '#00b2bc',
    height: 36,
    borderRadius: 24,
    marginLeft: 12,
  },
  btnOption: {
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 15,
    padding: 12,
    marginRight: 4,
    alignItems: 'center',
  },
  btnSelected: {
    backgroundColor: '#00b2bc',
    borderColor: '#00b2bc',
    borderWidth: 2,
    borderRadius: 15,
    padding: 12,
    marginRight: 4,
    alignItems: 'center',
  },
  addCustomerBtn: {
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: 180,
    margin: 6,
    marginVertical: 12,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    padding: 6,
  },
  addCustomerText: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginLeft: 4,
    marginRight: 4,
  },
  changeViewBtn: {
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: 180,
    margin: 6,
    marginVertical: 12,
    backgroundColor: '#00b2cb',
    borderWidth: 2,
    borderRadius: 15,
    padding: 6,
  },
  changeViewText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginLeft: 4,
    marginRight: 4,
  },
  customerBtnArea: {
    flexDirection: 'row',
    marginHorizontal: 6,
  },
  btnText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  btnOptions: {
    flexDirection: 'row',
    padding: 12,
  },
});

const modal = StyleSheet.create({
  modalContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    width: '100%',
    height: 250,
    padding: 24,
    backgroundColor: '#1e1e1e',
    borderRadius: 25,
  },
  modalText: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: 'white',
  },
  modalSubText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginTop: 6,
    color: 'white',
  },
  modalBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
    justifyContent: 'center',
  },
  modalBtnContinue: {
    backgroundColor: 'red',
    width: '48%',
    height: 48,
    borderRadius: 8,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtnTextContinue: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  modalBtnCancel: {
    backgroundColor: 'white',
    width: '48%',
    height: 48,
    borderRadius: 8,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtnTextCancel: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
