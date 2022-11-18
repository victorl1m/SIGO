import Svg, {Path} from 'react-native-svg';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';

export function Profile() {
  const pictureProfile =
    'https://exoffender.org/wp-content/uploads/2016/09/empty-profile.png';

  return (
    <ScrollView style={styles.profileContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.goBack}>
        <Svg
          style={styles.goBackIcon}
          width={16}
          height={16}
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M6.474.215L.22 6.474a.744.744 0 00-.22.53c0 .192.073.384.22.53l6.252 6.257a.742.742 0 00.527.217.753.753 0 00.534-1.278L2.557 7.754h14.692a.75.75 0 000-1.5H2.557l4.978-4.979A.745.745 0 007.529.221.749.749 0 006.474.215z"
            fill="#fff"
          />
        </Svg>
        <Text style={styles.youProfile}>Seu perfil</Text>
      </View>
      <View style={styles.profileData}>
        <Image source={{uri: pictureProfile}} style={styles.profileImage} />
        <Text style={styles.profileName}>Victor Lima</Text>
        <Text style={styles.profileEmail}>trackedby1@gmail.com</Text>
      </View>
      <View style={styles.boxBtn}>
        <Svg
          style={styles.svgIcon}
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M8 0a4 4 0 014 4v2h1.75A2.25 2.25 0 0116 8.25V9c-.319 0-.637.11-.896.329l-.107.1c-.164.17-.33.323-.496.457L14.5 8.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h9.888a6.024 6.024 0 001.54 1.5H2.25A2.25 2.25 0 010 17.75v-9.5A2.25 2.25 0 012.25 6H4V4a4 4 0 014-4zm8.284 10.122c.992 1.036 2.091 1.545 3.316 1.545.193 0 .355.143.392.332l.008.084v2.501c0 2.682-1.313 4.506-3.873 5.395a.385.385 0 01-.253 0c-2.476-.86-3.785-2.592-3.87-5.13L12 14.585v-2.5c0-.23.18-.417.4-.417 1.223 0 2.323-.51 3.318-1.545a.389.389 0 01.566 0zM8 11.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-10A2.5 2.5 0 005.5 4v2h5V4A2.5 2.5 0 008 1.5z"
            fill="#fff"
          />
        </Svg>
        <Text style={styles.optionText}>Alterar Senha</Text>
      </View>
      <View style={styles.boxBtn}>
        <Svg
          style={styles.svgIcon}
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M10.002.005C15.52.005 20 4.485 20 10.002 20 15.52 15.52 20 10.002 20 4.485 20 .005 15.52.005 10.002c0-5.517 4.48-9.997 9.997-9.997zm0 1.5a8.5 8.5 0 00-8.497 8.497c0 4.69 3.807 8.498 8.497 8.498 4.69 0 8.498-3.808 8.498-8.498 0-4.69-3.808-8.497-8.498-8.497zm0 6.5a.75.75 0 00-.75.75v5.5a.75.75 0 001.5 0v-5.5a.75.75 0 00-.75-.75zm-.002-3a1 1 0 110 2 1 1 0 010-2z"
            fill="#fff"
          />
        </Svg>
        <Text style={styles.optionText}>Alterar dados pessoais</Text>
      </View>
      <View style={styles.boxBtn}>
        <Svg
          style={styles.svgIcon}
          width={20}
          height={20}
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M8.5.751a.75.75 0 00-1.5 0v.752c0 .633.196 1.22.53 1.703A3.753 3.753 0 005.01 6.49h-.257a2.25 2.25 0 01-2.24-2.259l.006-1.486a.75.75 0 10-1.5-.006l-.007 1.486A3.75 3.75 0 004.747 7.99H5V9.5H.75a.75.75 0 000 1.5H5v1.992h-.253a3.75 3.75 0 00-3.735 3.766l.007 1.485a.75.75 0 001.5-.006l-.007-1.485a2.25 2.25 0 012.241-2.26H5.226a5.002 5.002 0 009.548 0H15.247a2.25 2.25 0 012.24 2.26l-.006 1.485a.75.75 0 001.5.006l.006-1.485a3.75 3.75 0 00-3.734-3.766H15V11h4.251a.75.75 0 000-1.5H15V7.99h.253a3.75 3.75 0 003.735-3.765l-.007-1.486a.75.75 0 10-1.5.006l.006 1.486a2.25 2.25 0 01-2.24 2.26h-.256a3.753 3.753 0 00-2.52-3.285c.333-.483.529-1.07.529-1.703V.751a.75.75 0 00-1.5 0v.752a1.5 1.5 0 01-3 0V.751zm-2 6.002a2.25 2.25 0 012.25-2.25h2.5a2.25 2.25 0 012.25 2.25v6.248a3.5 3.5 0 11-7 0V6.753z"
            fill="#fff"
          />
        </Svg>
        <Text style={styles.optionText}>Solução de problemas</Text>
      </View>
      <View style={styles.boxBtn}>
        <Svg
          style={styles.svgIcon}
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-2V2a8 8 0 110 16z"
            fill="#fff"
          />
        </Svg>
        <Text style={styles.optionText}>Alterar tema</Text>
      </View>
      <Text style={styles.privacyAndTerms}>Privacidade & Termos</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#121212',
  },
  goBack: {
    position: 'relative',
  },
  goBackIcon: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  youProfile: {
    textAlign: 'center',
    marginTop: 18,
    fontSize: 18,
    color: '#00B2CB',
    fontFamily: 'Montserrat-Bold',
  },
  profileImage: {
    height: 160,
    width: 160,
    borderRadius: 200,
    marginBottom: 12,
  },
  profileData: {
    alignItems: 'center',
    marginTop: 12,
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#00B2CB',
  },
  profileEmail: {
    fontSize: 18,
    fontFamily: 'Montserrat-Light',
    margin: 1,
    color: 'white',
    marginBottom: 36,
  },
  optionText: {
    marginLeft: 16,
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: '#fff',
  },
  boxBtn: {
    backgroundColor: '#1e1e1e',
    padding: 24,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  svgIcon: {
    marginLeft: 8,
  },
  privacyAndTerms: {
    textAlign: 'center',
    marginTop: 36,
    marginBottom: 36,
    color: '#00B2CB',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
  },
});
