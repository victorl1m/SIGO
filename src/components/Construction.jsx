import {View, Text, Image, StyleSheet} from 'react-native';

export function Construction({constructionName}) {
  const constructionCity = 'São Paulo';
  const constructionState = 'SP';
  const constructionImage = 'https://picsum.photos/200/300';

  return (
    <View style={styles.container}>
      <View style={styles.constructionContainer}>
        <Image style={styles.image} source={{uri: constructionImage}} />
        <View>
          <Text style={styles.constructionName}>{constructionName}</Text>
          <Text style={styles.constructionLocal}>
            {constructionCity} - {constructionState}
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
    marginVertical: 6,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 24,
    marginRight: 12,
  },
  constructionContainer: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    width: '100%',
    height: 75,
    alignItems: 'center',
  },
  constructionName: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  constructionLocal: {
    color: '#00b2cb',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
});
