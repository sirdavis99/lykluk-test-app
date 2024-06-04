import React, { useEffect, useState } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { InputColorState } from "./main";
import { fontPixel } from 'utils/pxToDpConvert';
import { RegularText } from "../text/styled";
import { useThemeMode } from "providers/hooks";
import { InputPlaceholderTextSection, InputPlaceholderPressable } from "./styled";

export interface InputPlaceholderProps {
    placeholder?: string;
    value?: string;
    containerStyle?: ViewStyle,
    textStyle?: TextStyle,
    inputError?: boolean;
    onPress?: () => void;
    rightComponent?: React.ReactElement,
    leftComponent?: React.ReactElement
}

export const InputPlaceholder: React.FC<InputPlaceholderProps> = ({
    placeholder,
    value,
    containerStyle,
    textStyle,
    onPress = () => { },
    inputError,
    rightComponent,
    leftComponent
}) => {
    const { colors } = useThemeMode();
    const [active, setActive] = useState<boolean>(false);

    const onPlaceholderPress = () => {
        setActive(true);
        onPress();
    }

    useEffect(() => {
        if (active) {
            setActive(false);
        }
    }, [value])

    return (
        <InputPlaceholderPressable
            onPress={onPlaceholderPress}
            style={{ ...containerStyle, ...InputColorState(colors, active, inputError) }}
        >
            {leftComponent}
            <InputPlaceholderTextSection>
                <RegularText style={{ fontSize: fontPixel(15), ...textStyle }}>
                    {(value) ? value : placeholder}
                </RegularText>
            </InputPlaceholderTextSection>
            {rightComponent}
        </InputPlaceholderPressable>
    );
};

