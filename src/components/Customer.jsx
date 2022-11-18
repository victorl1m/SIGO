import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export default function Customer() {
  const customerName = 'Jane Doe';
  const customerImage = 'https://i.pravatar.cc/150?img=1';
  const totalJobs = '3';
  const totalTasks = '12';
  const jobValue = 'R$ 1.000.000,00';

  return (
    <SafeAreaView style={customer.container}>
      <View style={customer.customerArea}>
        <Image style={customer.image} source={{uri: customerImage}} />
        <Text style={customer.nameText}>{customerName}</Text>
        <Pressable style={customer.accessBtn}>
          <Svg
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            fill="#00b2cb">
            <Path d="M2.598 9H1.543C3.025 4.362 7.373 1 12.5 1 18.847 1 24 6.153 24 12.5S18.847 24 12.5 24c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7C18.295 23 23 18.295 23 12.5S18.295 2 12.5 2C7.932 2 4.041 4.923 2.598 9zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737L14.828 13H0v-1h14.826z" />
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
    marginLeft: 184,
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
