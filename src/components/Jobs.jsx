import {View, Text, Image, StyleSheet} from 'react-native';

export default function Jobs() {
  const jobName = 'Shopping Center';
  const jobCity = 'São Paulo';
  const jobState = 'SP';
  const jobImage = 'https://i.pravatar.cc/150?img=1';

  return (
    <View style={styles.container}>
      <View style={styles.jobsContainer}>
        <Image style={styles.image} source={{uri: jobImage}} />
        <View>
          <Text style={styles.jobName}>{jobName}</Text>
          <Text style={styles.jobLocal}>
            {jobCity} - {jobState}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 12,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    marginHorizontal: 12,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 24,
    marginRight: 12,
  },
  jobsContainer: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    width: '100%',
    height: 75,
    alignItems: 'center',
  },
  jobName: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  jobLocal: {
    color: '#00b2cb',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
});
