import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  ScrollView,
  Image,
  Modal,
} from 'react-native';

import {useEffect, useState, useContext, useRef} from 'react';
import {Svg, Path} from 'react-native-svg'; // svg import
import {api} from '../api/axios';
import {AuthContext} from '../contexts/AuthContext';
import {Construction} from '../components/Construction';
import Toast from 'react-native-simple-toast';

export const CustomerScreen = ({route, navigation}) => {
  const pictureProfile =
    'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png';

  const [constructions, setConstructions] = useState([]);
  const [customerName, setCustomerName] = useState([]);
  const customerId = route.params?.customerId;
  const {update, setUpdate} = useContext(AuthContext);

  const {navigate} = navigation;

  useEffect(() => {
    api
      .get(`/getCustomers/${customerId}`)
      .then(res => {
        setCustomerName(res.data[0].customer_name);
      })
      .catch(error => {
        console.log(error);
      });
    api
      .get(`/getConstructions/${customerId}`)
      .then(res => {
        setConstructions(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [update]);

  const [modalVisible, setModalVisible] = useState(false);

  function handleRemoveCustomer() {
    api
      .delete(`/deleteCustomer/${customerId}`)
      .then(() => {
        // if success
        setUpdate(!update);
        navigate('CustomerSelection');
        Toast.show('Cliente deletado com sucesso');
      })
      .catch(error => {
        console.log(error);
      });
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
                navigate('AddJob', {customerId: customerId});
              }}
              style={styles.addJobsBtn}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                viewBox="0 0 24 24">
                <Path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
              </Svg>
              <Text style={styles.addText}>Adicionar</Text>
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
              <Text style={styles.editText}>Editar</Text>
            </Pressable>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.removeJobsBtn}>
              <Svg
                width={16}
                height={16}
                fill="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <Path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm4.253 9.25h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" />
              </Svg>
              <Text style={styles.removeText}>Remover</Text>
            </Pressable>
            <Modal
              animationType="slide"
              visible={modalVisible}
              transparent={true}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={modal.shadow}>
                <View style={modal.modalContainer}>
                  <Svg
                    width={72}
                    height={72}
                    fill="red"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" />
                  </Svg>
                  <Text style={modal.modalText}>Remover cliente</Text>
                  <Text style={modal.modalSubText}>
                    Deseja realmente remover o cliente?
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
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
      {constructions.length > 0 ? (
        constructions.map(construction => (
          <Construction
            key={construction.id}
            constructionName={construction.construction_name}
          />
        ))
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
      )}
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
  profileImage: {
    height: 160,
    width: 160,
    borderRadius: 200,
    marginTop: 12,
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
  addText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginLeft: 4,
    marginRight: 2,
  },
  editText: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginLeft: 4,
    marginRight: 2,
  },
  removeText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginLeft: 4,
    marginRight: 2,
  },
  actionArea: {
    flexDirection: 'row',
    marginVertical: 12,
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

const modal = StyleSheet.create({
  shadow: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    shadowColor: '#000',
  },
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
