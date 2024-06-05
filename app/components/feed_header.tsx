import { MediumText, RegularText } from "@components/text"
import { Row, ViewContainer } from "@components/views"
import { Feather } from "@expo/vector-icons"
import { useThemeMode } from "@providers/hooks"
import { Avatar } from "@rneui/base"
import { Alert } from "react-native"

export const FeedHeader = () => {
    const { colors } = useThemeMode();

    const onPress = () => {
        Alert.alert("Beautiful!", "Lets see what we can make of this action!");
    }

    return (
        <Row
            justifyContent="space-between"
            alignItems="center"
            // backgroundColor={"orange"}
        >
            <ViewContainer>
                <Avatar
                    size={30}
                    rounded
                    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                    key={`123`}
                    onPress={onPress}
                />
            </ViewContainer>
            <ViewContainer>
                <Row onPress={onPress} >
                    <RegularText color={colors.grey_dark_shade}>Following</RegularText>
                    <MediumText color={colors.white}>&nbsp;&nbsp;|&nbsp;&nbsp;</MediumText>
                    <MediumText color={colors.white}>LUK</MediumText>
                </Row>
            </ViewContainer>
            <ViewContainer>
                <Feather
                    name="flag"
                    size={24}
                    color={colors.white}
                    style={{ opacity: 0.7 }}
                    onPress={onPress}
                />
            </ViewContainer>
        </Row>
    )
}