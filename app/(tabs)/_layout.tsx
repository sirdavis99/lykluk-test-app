import { Tabs } from "expo-router";
import { useThemeMode } from "@providers/hooks";
import HomeIcon from "@assets/svgs/tabs/home-icon.svg";
import HomeActiveIcon from "@assets/svgs/tabs/home-active-icon.svg";
import DiscoverIcon from "@assets/svgs/tabs/discover-icon.svg";
import DiscoverActiveIcon from "@assets/svgs/tabs/discover-active-icon.svg";
import NotificationIcon from "@assets/svgs/tabs/notification-icon.svg";
import NotificationActiveIcon from "@assets/svgs/tabs/notification-active-icon.svg";
import MessageIcon from "@assets/svgs/tabs/message-icon.svg";
import MessageActiveIcon from "@assets/svgs/tabs/message-active-icon.svg";

import { font } from "@utils/fonts";
import { BlurView } from 'expo-blur';
import { fontSize } from "@components/text";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyledTouchable } from "@components/button";
import { heightPixel } from "@utils/pxToDpConvert";


export const unstable_settings = {
  initialRouteName: "index",
};

export default function DashBoardLayout() {
  const { colors } = useThemeMode();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: 'transparent',
          height: heightPixel(90),
          elevation: 5,
        },
        tabBarIconStyle:{
          marginBottom: 0,
          paddingBottom:0,
        },
        tabBarLabelStyle: {
          fontFamily: font.medium,
          fontSize: fontSize.xs - 2,
          // marginBottom: heightPixel(2),
        },
        tabBarBackground: () => (
          <BlurView
            intensity={10}
            style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)' }}
          />
        )
      }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            focused ? <HomeActiveIcon width={heightPixel(25)} /> : <HomeIcon width={heightPixel(25)} />
          ),
          tabBarLabel: "Home",
        }}
      />

      <Tabs.Screen
        name="discover/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            focused ? <DiscoverActiveIcon width={heightPixel(25)} /> : <DiscoverIcon width={heightPixel(25)} />
          ),
          tabBarLabel: "Discover",
        }}
      />

      <Tabs.Screen
        name="posts/index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <StyledTouchable
              width={heightPixel(60)}
              height={heightPixel(60)}
              marginTop={18}
              backgroundColor={colors.white}
              borderRadius={200}
              borderWidth={heightPixel(5)}
              borderColor={colors.primary}
              pointerEvents="none"
            >
              <FontAwesome5
                name="plus"
                size={heightPixel(24)}
                color={colors.primary}
              />
            </StyledTouchable>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications/index"
        options={{
          title: "Notifications",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            focused ? <NotificationActiveIcon width={heightPixel(25)} /> : <NotificationIcon width={heightPixel(25)} />
          ),
          tabBarLabel: "Notifications",
        }}
      />
      <Tabs.Screen
        name="messages/index"
        options={{
          title: "Messages",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            focused ? <MessageActiveIcon width={heightPixel(25)} /> : <MessageIcon width={heightPixel(25)} />
          ),
          tabBarLabel: "Messages",
        }}
      />
    </Tabs>
  );
}
