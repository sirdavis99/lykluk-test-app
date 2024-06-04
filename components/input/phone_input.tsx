import React, { useRef, useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { font } from "utils/fonts";
import { widthPixel } from "utils/pxToDpConvert";
import { useThemeMode } from "providers/hooks";
import { BottomText, InputWrapper } from "./styled";
import { InputColorState } from "./main";


export interface CustomPhoneInputProps {
    placeholder?: string;
    bottomText?: string;
    showBottomText?: boolean;
    inputError?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    value?: string;
    singleCountry?: boolean;
    onChange?: (text: string) => void;
}

export const PhoneInputCustom: React.FC<CustomPhoneInputProps> = ({
    placeholder = "Phone Number",
    inputError,
    bottomText,
    showBottomText,
    value,
    singleCountry,
    onChange,
    ...rest
}) => {
    const [active, setActive] = useState<boolean>();
    const { colors } = useThemeMode();
    const phoneInput = useRef<PhoneInput>(null);

    return (
        <>
            <InputWrapper
                style={{ paddingVertical: 0, ...(InputColorState(colors, active, inputError)) }}
            >
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    placeholder={placeholder}
                    defaultCode="NG"
                    disableArrowIcon={singleCountry}
                    layout="first"
                    containerStyle={{ backgroundColor: 'transparent', alignItems: 'center' }}
                    textContainerStyle={{ backgroundColor: 'transparent', paddingLeft: widthPixel(10) }}
                    codeTextStyle={{ fontFamily: font.bold }}
                    textInputStyle={{ fontFamily: font.regular }}
                    textInputProps={{ placeholderTextColor: "#828282" }}
                    flagButtonStyle={{ width: widthPixel(50) }}
                    onChangeFormattedText={onChange}
                    {...rest}
                />

            </InputWrapper>
            {(bottomText && showBottomText) || (bottomText && inputError) ? (
                <BottomText color={inputError ? colors.danger : colors.text}>
                    {bottomText}
                </BottomText>
            ) : null}
        </>
    );
};