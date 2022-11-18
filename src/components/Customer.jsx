import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

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
