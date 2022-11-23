// =======================================================================================================
//     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Modal Delete Customer
// =======================================================================================================
export default function ModalDeleteCustomer({route}) {
  const customerId = route.params?.customerId;

  function handleRemoveCustomer() {
    // function to remove customer
    api
      .delete(`/deleteCustomer/${customerId}`) // delete customer by id
      .then(() => {
        // if success
        setUpdate(!update); // update the customer list
        navigate('CustomerSelection'); // navigate to customer selection screen
        Toast.show('Usuário deletado com sucesso'); // show toast message after delete customer
      })
      .catch(error => {
        // error handler
        console.log(error); // show error in console
      });
  }

  modalizeRef = useRef(null); // modalize ref

  function closeModal() {
    modalizeRef.current?.close(); // close modal
  }
  return (
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
          style={modal.modalBtnContinue}
          onPress={() => {
            handleRemoveCustomer();
            closeModal();
          }}>
          <Text style={modal.modalBtnTextContinue}>Remover</Text>
        </Pressable>
      </View>
    </View>
  );
}

const modal = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 24,
  },
  modalText: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  modalSubText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginTop: 6,
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
    width: '90%',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtnTextContinue: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
