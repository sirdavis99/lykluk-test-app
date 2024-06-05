import { MediumText, RegularText, fontSize, lineHeight } from "@components/text";
import { HSpacer, Row, ViewContainer } from "@components/views"
import { Feather } from "@expo/vector-icons"
import { useThemeMode } from "@providers/hooks"
import { Avatar } from "@rneui/base"
import { nFormatter } from "@utils/formatting"
import { LinearGradient } from "expo-linear-gradient";
import { truncate } from "lodash"
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const FeedAbout = () => {
    const { colors } = useThemeMode();
    
    const onPress = () => {
        Alert.alert("Beautiful!", "Lets see what we can make of this action!");
    }

    return (

        <Row
            // justifyContent="space-between"
            alignItems="center"
        // backgroundColor={"pink"}
        >
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
                style={{ flex: 1, paddingBottom: RFValue(15) }}
            >
                <Row
                    alignItems="center"
                    pointerEvents="none"
                >
                    <ViewContainer
                        paddingRight={10}
                        paddingLeft={15}
                    >
                        <Avatar
                            size={50}
                            rounded
                            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                            key={`123`}
                            onPress={onPress}
                        />
                    </ViewContainer>
                    <ViewContainer
                        flex={1}
                        flexGrow={1}
                        paddingLeft={0}
                    >
                        <Row alignItems="center" onPress={onPress}>
                            <Feather
                                name="eye"
                                color={colors.grey_dark_shade}
                                size={fontSize.xs - 1}
                            />
                            <HSpacer width={5} />
                            <RegularText
                                color={colors.white}
                                fontSize={fontSize.xs - 5}
                            >
                                {nFormatter(275001)}&nbsp;views
                            </RegularText>
                        </Row>
                        <MediumText
                            color={colors.white}
                            fontSize={fontSize.xs - 1}
                            lineHeight={fontSize.xs - 1}
                            onPress={onPress}
                        >
                            Brooklyn Simmons
                        </MediumText>
                        <RegularText
                            color={colors.grey_dark_shade}
                            fontSize={fontSize.xs - 4}
                            lineHeight={lineHeight.xs - 2}
                            onPress={onPress}
                        >
                            {truncate("Dont kw how to finish this. #hashtag and #second", {
                                length: 100, omission: "...Load More"
                            })}
                        </RegularText>
                    </ViewContainer>
                    <ViewContainer
                        paddingRight={15}
                    >
                        <Avatar
                            size={25}
                            rounded
                            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                            key={`123`}
                            onPress={onPress}
                        />
                    </ViewContainer>
                </Row>
            </LinearGradient>

        </Row>
    )
}