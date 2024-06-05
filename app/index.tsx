import { useState } from "react";
import { BaseView, BaseSafeView, Row, ViewContainer } from "@components/views";
import { useThemeMode } from "@providers/hooks";
import { useEffect } from "react";
import { MediumText } from "@components/text";
import Logo from "@assets/images/logo.jpeg";
import { Image } from 'expo-image';
import { PrimaryButton } from "@components/button";
import { router } from "expo-router";


export default function LoadScreens() {
  const [screen, setScreen] = useState("Splash");

  useEffect(() => {
    const timeout = setTimeout(() => {
      // setScreen("Home");
      router.navigate("(tabs)")
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return screen === "Splash" ? <Splash /> : <Home />;
}

export const Splash = () => {
  const { colors } = useThemeMode();
  return (
    <BaseSafeView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={Logo}
        style={{ height: 100, width: 100 }}
      />
    </BaseSafeView>
  );
};

export const Home = () => {
  const { colors } = useThemeMode();
  return (
    <BaseView  >
      <Row
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
      >
        <ViewContainer>
          <PrimaryButton
            text="Let's get started .."
            onPress={() => router.navigate("(tabs)")}
          />
        </ViewContainer>
      </Row>

    </BaseView>
  );
};
