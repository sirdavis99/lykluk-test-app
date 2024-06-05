import "react-native-reanimated"
import 'expo-asset';
import React from "react";
import { ListenerSubscription, store } from "stores";
import { Slot, SplashScreen } from "expo-router";
import { useCallback, useEffect, useRef } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import * as Notifications from 'expo-notifications';
import { loadAppFonts, registerForPushNotificationsAsync } from "utils";
import { Platform, UIManager } from "react-native";
import { Provider } from "react-redux";
import { ThemeModesProvider } from "providers";
import { Text, TextInput } from 'react-native';
import { CustomFlashMessage } from '@components/notify';


// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;
// @ts-ignore
TextInput.defaultProps = TextInput.defaultProps || {};
// @ts-ignore
TextInput.defaultProps.allowFontScaling = false;


export {
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const notificationListener = useRef<ListenerSubscription>();
  const responseListener = useRef<ListenerSubscription>();
  const [fontsLoaded, error] = Font.useFonts(loadAppFonts());

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    registerForPushNotificationsAsync()
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        //setNotification(notification);
        // console.log(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // console.log(response);
      });
    return () => {
      if (notificationListener.current)
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      if (responseListener.current)
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <ThemeModesProvider>
        <CustomFlashMessage />
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <Slot />
        </SafeAreaProvider>
      </ThemeModesProvider>
    </Provider>
  );
}
