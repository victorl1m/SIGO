import { createContext } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect, useCallback } from "react";

export const FontContext = createContext({});

export function FontProvider({ children }) {
  // =======================================================================================================
  //       ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Font Loader
  // =======================================================================================================
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
        <FontContext.Provider value={{onLayoutRootView}}>
            { children }
        </FontContext.Provider>
    )
}
