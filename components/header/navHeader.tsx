import styled from "@emotion/native";
import {
  fontPixel,
  heightPixel,
  widthPixel,
} from "../../utils/pxToDpConvert"
// from "../../utility/pxToDpConvert";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { ColorValue, TouchableOpacity, ViewProps, ViewStyle } from "react-native";
import { ExtraBoldText, BoldText } from '../text/styled';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useTheme } from "@emotion/react";
import BackArrow from "../../assets/svgs/back-arrow.svg";
import { RFValue } from "react-native-responsive-fontsize";

interface HeaderContainerProps extends ViewProps {
  elevation?: number,
  floating?: boolean;
  hasBorderBottom?: boolean;
  backgroundColor?: ColorValue
}
const HeaderContainer = styled.View<HeaderContainerProps>(({
  elevation,
  floating,
  hasBorderBottom,
  backgroundColor
}) => ({
  position: floating ? "absolute" : "relative",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: widthPixel(25),
  paddingBottom: heightPixel(20),
  paddingTop: heightPixel(55),
  width: "100%",
  zIndex: elevation ?? 10,
  elevation: elevation,
  borderBottomWidth: hasBorderBottom ? 0.3 : 0,
  borderBottomColor: "#979797",
  backgroundColor
}));

const SideComponent = styled.View({
  flexGrow: 1
});
export interface NavHeaderProps extends HeaderContainerProps {
  title?: string;
  rightComponent?: ReactNode;
  centerComponent?: ReactNode;
  leftComponent?: React.ReactElement;
  rightComponentProps?: ViewProps;
  centerComponentProps?: ViewProps;
  leftComponentProps?: ViewProps;
  backAction?: () => void;
  elevation?: number;
  color?: string;
}

export const NavHeader: React.FC<NavHeaderProps> = ({
  title,
  leftComponent,
  centerComponent,
  rightComponent,
  rightComponentProps,
  centerComponentProps,
  leftComponentProps,
  elevation,
  backAction,
  color,
  ...rest
}) => {
  const navigation = useNavigation();

  return (
    <HeaderContainer  {...rest}>
      {leftComponent ? (
        <SideComponent {...leftComponentProps}>
          {leftComponent}
        </SideComponent>
      ) : (
        <TouchableOpacity
          onPress={() => backAction ? backAction() : navigation.goBack()}
          style={{ flexGrow: 1 }}
        >
          {/* <AntDesign name="arrowleft" size={24} color={color ? color : "white"}/> */}
          <BackArrow height={RFValue(60)} />
        </TouchableOpacity>
      )}
      {(centerComponent) ? (
        <SideComponent style={{ flexGrow: 3 }} {...centerComponentProps}>
          {centerComponent}
        </SideComponent>
      ) : (
        <BoldText
          fontSize={RFValue(12)}
          style={{ flexGrow: 5 }}
          textAlign="center"
        >{title}</BoldText>
      )}
      <SideComponent style={{ alignItems: 'flex-end' }} {...rightComponentProps}>
        {rightComponent}
      </SideComponent>
    </HeaderContainer>
  );
};


