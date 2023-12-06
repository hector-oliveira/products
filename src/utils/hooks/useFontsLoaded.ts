import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Fonts from '@expo-google-fonts/poppins';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export const useFontsLoaded = () => {
  
  let [fontsLoaded, fontError] = useFonts({
    Poppins_Medium: Fonts.Poppins_500Medium,
    Poppins_Regular: Fonts.Poppins_400Regular,
    Poppins_SemiBold: Fonts.Poppins_600SemiBold,
    Poppins_Bold: Fonts.Poppins_700Bold,

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return {
    fontsLoaded,
    fontError,
    onLayoutRootView
  }
}