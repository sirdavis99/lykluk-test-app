import 'react-native-reanimated';
import 'expo-asset';
import React from "react";
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { loadAppFonts } from '@utils/fonts';
import { Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeModesProvider } from '@/providers';
import { CustomFlashMessage } from '@/components/notify';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '@/stores/main';
import { Text, TextInput } from 'react-native';
import { MediumText } from '@/components/text';


// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;
// @ts-ignore
TextInput.defaultProps = TextInput.defaultProps || {};
// @ts-ignore
TextInput.defaultProps.allowFontScaling = false;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, error] = useFonts(loadAppFonts());

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  // if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <ThemeModesProvider>
        <CustomFlashMessage />
        <SafeAreaProvider onLayout={onLayoutRootView}>
          {/* <Slot /> */}

          <MediumText>lsksk</MediumText>
        </SafeAreaProvider>
      </ThemeModesProvider>
    </Provider>
  );
}
