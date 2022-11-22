import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Customer({name}) {
  const customerName = name;
  const customerImage = 'https://i.pravatar.cc/150?img=1';
  const totalJobs = '-';
  const totalTasks = '-';
  const jobValue = '-';

  return (
    <SafeAreaView style={customer.container}>
      <View style={customer.customerArea}>
        <Image style={customer.image} source={{uri: customerImage}} />
        <Text style={customer.nameText}>{customerName}</Text>
        <Pressable style={customer.accessBtn}>
          <Svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#00b2cb"
            xmlns="http://www.w3.org/2000/svg">
            <Path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" />
          </Svg>
        </Pressable>
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
    flexDirection: 'column',
    padding: 12,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    marginHorizontal: 12,
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 24,
    marginRight: 12,
  },
  nameText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  customerArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobsArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 12,
  },
  typeBg: {
    backgroundColor: '#121212',
    borderRadius: 15,
    padding: 8,
    alignItems: 'center',
  },
  jobsNumber: {
    color: '#FFA500',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  tasksNumber: {
    color: 'yellow',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  valueNumber: {
    color: 'green',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  jobsText: {
    color: '#FFA500',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  accessBtn: {
    marginLeft: 'auto',
  },
  tasksText: {
    color: 'yellow',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  valueText: {
    color: 'green',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
});
