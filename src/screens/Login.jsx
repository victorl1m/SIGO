import { StatusBar } from "expo-status-bar";
import React, { useEffect, useCallback, props } from "react";
import {Pressable, StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

export function Login({ navigation }) {

  // Login function
  function handleLogin() {
    const { navigate } = navigation;
    navigate('Home');
  }

  function handleForgot() {
    const { navigate } = navigation;
    navigate('ForgotPW');
  }

  function handleRegister() {
    const { navigate } = navigation;
    navigate('Register');
  }


  // font loader
  const [fontsLoaded] = useFonts({
    "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Light": require("../../assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
  });

  // prevents SplashScreen from auto hiding while the fonts are loaded.
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  // After the custom fonts have loaded, we can hide the splash screen and display the app screen.
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.loginContainer}>
      <View style={styles.logo}>
      <Svg
      width={64}
      height={64}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Rect width={64} height={64} rx={25} fill="#fff" />
        <Path
          d="M16.029 7.385L12 11.77l.19.247c.106.134.962 1.086 1.897 2.115L15.798 16l4.101-4.385L24 7.223l-1.975-2.115L20.051 3l-4.022 4.385zm28.927 4.316l-7.77 8.486 1.866 1.907 1.875 1.916.498-.553.506-.543.947.968.946.967.917-1 .917-1-.947-.967-.946-.968.899-.971.89-.981.947.967.947.968.916-1 .917-1-.901-.922c-.496-.506-.903-.968-.904-1.014-.001-.122 5.254-5.855 5.37-5.858.044 0 1.333 1.27 2.856 2.827l2.777 2.837-5.954 6.495-5.963 6.505 1.848 1.888 1.849 1.889 7.744-8.457 7.744-8.447-6.51-6.708-6.511-6.707-7.77 8.476zm-24.696.365l-3.985 4.374 14.719 16.155L45.712 48.75l3.998-4.388 4.004-4.395-14.7-16.134c-8.091-8.882-14.718-16.14-14.737-16.14-.02 0-1.825 1.968-4.017 4.373zM-4.996 11.05c-.196.58-.475 1.312-.618 1.63-.731 1.583-2.367 2.283-3.95 1.702-.226-.08-.882-.39-1.463-.676l-1.048-.533-1.47 1.551-1.47 1.551.505 1.113c.28.613.558 1.265.619 1.448.588 1.75-.083 3.491-1.651 4.287-.332.167-1.026.46-1.538.644l-.92.326v4.477l.89.318c1.213.43 2.11.915 2.54 1.368.664.716 1.01 1.83.86 2.808-.083.565-.204.89-.822 2.259l-.46 1.033 1.485 1.567 1.485 1.567 1.116-.58c1.892-.979 2.744-1.066 3.958-.414.86.461 1.327 1.209 1.982 3.197l.37 1.113 2.065.024 2.066.016.286-.93c.732-2.386 1.373-3.261 2.692-3.69.935-.31 1.613-.176 3.234.644.603.31 1.146.556 1.206.556.068 0 .754-.676 1.538-1.503 1.244-1.32 1.41-1.527 1.365-1.694a19.43 19.43 0 00-.46-1.034 14.617 14.617 0 01-.603-1.471c-.392-1.225-.136-2.513.678-3.428.445-.5 1.025-.827 2.382-1.328l1.093-.398.023-2.226.015-2.227-.957-.35c-1.945-.7-2.616-1.177-3.091-2.227-.234-.51-.287-.708-.31-1.257-.045-.827.114-1.4.777-2.815.272-.58.49-1.09.49-1.137 0-.048-.656-.78-1.455-1.623l-1.455-1.535-1.017.525c-1.606.827-2.307 1.01-3.129.835-1.018-.222-1.832-.875-2.3-1.837-.135-.278-.399-.994-.602-1.583L-.42 10.04l-2.11-.024L-4.635 10l-.362 1.05zm3.657 9.965c.27.072.776.27 1.13.453.837.438 1.795 1.416 2.202 2.251.46.947.618 1.623.618 2.625 0 1.527-.468 2.735-1.5 3.825-.498.525-.74.708-1.32 1.018-.927.477-1.613.636-2.6.58-1.93-.11-3.581-1.272-4.403-3.11a5.632 5.632 0 01.37-5.32c.715-1.16 1.763-1.932 3.128-2.322.512-.151 1.771-.143 2.375 0zm19.658 18.303L9.82 48.665l7.047 7.668L23.913 64l8.45-9.273c4.637-5.105 8.441-9.326 8.441-9.38 0-.063-.871-1.063-1.936-2.233l-1.936-2.127-6.514 7.157-6.505 7.146-2.98-3.275c-1.637-1.797-2.972-3.318-2.972-3.371 0-.064.435-.585.967-1.17l.968-1.063 1.017 1.116 1.016 1.117.987-1.095.997-1.085-1.016-1.117-1.016-1.116.968-1.064c.532-.585 1.006-1.063 1.064-1.063.049 0 .533.478 1.065 1.063l.968 1.064 1.016-1.117 1.017-1.116-1.017-1.117-1.016-1.117.997-1.084.987-1.096 1.017 1.117 1.016 1.117L30.98 38.7l1.017-1.117-1.017-1.116-1.016-1.117.436-.478.435-.479-2.013-2.212-2.004-2.201-8.498 9.337zm32.535 6.26c-3.339 3.486-3.71 3.893-3.571 3.926.314.078 8.994 1.605 9.013 1.592.019-.026-1.65-9.352-1.688-9.384-.013-.013-1.701 1.723-3.754 3.866z"
          fill="#00B2CB"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width={64} height={64} rx={25} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
        </View>
          <View style={styles.loginSpacer}>
           <Text style={styles.loginText}>Usuário</Text>
            <TextInput maxLength={8} selectionColor={'#00B2CB'} autoComplete="username" style={styles.loginInput}/>
          </View>

          <View style={styles.LoginSpacer}>
           <Text style={styles.loginText}>Senha</Text>
            <TextInput maxLength={8} selectionColor={'#00B2CB'} style={styles.loginInput} secureTextEntry={true}/>
          </View>
        </View>
        <View style={styles.submitArea}>
            <Pressable onPress={handleLogin} style={styles.submitBtn}>
              <Text style={styles.submitText}>Entrar</Text>
            </Pressable>
            <Pressable onPress={handleForgot} style={styles.ForgotBtn}>
              <Text style={styles.ForgotText}>Esqueceu sua senha?</Text>
            </Pressable>
            <Pressable onPress={handleRegister} style={styles.signUpBtn}>
              <Text style={styles.signUpText}>Registrar-se</Text>
            </Pressable>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00B2CB",
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    marginTop: 250,
  },
  loginText: {
    color: "#fff",
    textAlign: "left",
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    fontWeight: "Lighter",
  },
  loginSpacer: {
    paddingVertical: 5,
  },
  loginInput: {
    color: "#000",
    backgroundColor: "#fff",
    textAlign: "left",
    fontSize: 20,
    borderRadius: 15,
    padding: 20,
    fontFamily: "Montserrat-Light",
  },

  submitArea: {
    flex: 1,
    marginBottom: 15,
    padding: 25,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  submitBtn: {
    backgroundColor: "#fff",
    padding: 25,
    width: "100%",
    borderRadius: 15,
  },
  submitText : {
    color: "#000",
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
  },
  ForgotText: {
    color: "#fff",
    fontFamily: "Montserrat-Light",
    fontSize: 16,
  },
  signUpText: {
    color: "#fff",
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    paddingVertical: 10,
  },
});
