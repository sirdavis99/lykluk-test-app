import { useTheme } from "@emotion/react";
import React from "react";
import { TextStyle, View, ViewProps, ViewStyle } from "react-native";
import { fontPixel } from "../../utils/pxToDpConvert";
import { BoldText, ExtraBoldText, RegularText } from "../text/styled";
import { heightPixel } from "../../utils/pxToDpConvert";
import styled from "@emotion/native";

export const AuthHeader: React.FC<{
  title: string;
  subTitle?: string;
  titleStyle?: TextStyle;
  subStyle?: TextStyle;
  containerStyle?: ViewStyle;
}> = ({ title, subTitle, titleStyle, subStyle, containerStyle, ...rest }) => {
  const { colors } = useTheme();

  return (
    <HeaderContainer style={containerStyle}>
      <ExtraBoldText
        style={{ ...titleStyle, marginBottom: heightPixel(3) }}
        color={colors.secondary}
        fontSize={fontPixel(24)}
        lineHeight={fontPixel(26)}
      >
        {title}
      </ExtraBoldText>
      <RegularText
        style={subStyle}
        color={colors.text}
        fontSize={fontPixel(14)}
        lineHeight={fontPixel(20)}
      >
        {subTitle}
      </RegularText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View({
  paddingTop: heightPixel(20),
});
