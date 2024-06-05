import { StyledTouchable } from "@components/button"
import { RFFontSize, RegularText, fontSize } from "@components/text";
import { Row, Spacer, ViewContainer } from "@components/views"
import { FontAwesome6, Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useThemeMode } from "@providers/hooks"
import { nFormatter } from "@utils/formatting"
import { Alert } from "react-native";

export interface FeedActionProps {
    isPlaying?: boolean
    onTogglePlayback?: () => void; ///
}

export const FeedAction: React.FC<FeedActionProps> = ({
    isPlaying = false,
    onTogglePlayback = () => { },
}) => {
    const { colors } = useThemeMode();

    const onPress = () => {
        Alert.alert("Beautiful!", "Lets see what we can make of this action!");
    }

    return (
        <Row
            flexGrow={1}
            justifyContent="space-between"
        >
            <ViewContainer
                flexGrow={1}
                paddingRight={0}
                paddingLeft={40}
            >
                <Row
                    justifyContent="center"
                    alignItems="center"
                    flex={1}
                    onPress={() => onTogglePlayback()}
                >
                    {(!isPlaying) && (
                        <StyledTouchable
                            paddingVertical={0}
                            paddingHorizontal={0}
                            opacity={0.8}
                            onPress={onTogglePlayback}
                        >
                            <FontAwesome6
                                name="play"
                                size={80}
                                color={colors.white}
                            />
                        </StyledTouchable>
                    )}
                </Row>
            </ViewContainer>
            <ViewContainer
                // backgroundColor={'purple'}
                justifyContent="flex-end"
                paddingLeft={0}
                paddingRight={15}
            >
                <Row
                    flexDirection="column"
                    pointerEvents="none"
                // backgroundColor={'red'}
                >
                    <StyledTouchable
                        justifyContent="center"
                        alignContent="center"
                        paddingVertical={0}
                        paddingHorizontal={0}
                        opacity={0.8}
                        onPress={onPress}
                    >
                        <Ionicons
                            name="heart"
                            size={RFFontSize.xxl}
                            color={colors.white}
                        />
                        <RegularText
                            fontSize={fontSize.xs - 3}
                            color={colors.white}
                        >
                            {nFormatter(1300000)}
                        </RegularText>
                    </StyledTouchable>
                    <Spacer height={20} />
                    <StyledTouchable
                        justifyContent="center"
                        alignContent="center"
                        paddingVertical={0}
                        paddingHorizontal={0}
                        opacity={0.8}
                        onPress={onPress}
                    >
                        <MaterialIcons
                            name="heart-broken"
                            size={RFFontSize.xxl}
                            color={colors.white}
                        />
                        <RegularText
                            fontSize={fontSize.xs - 3}
                            color={colors.white}
                        >
                            {nFormatter(265100)}
                        </RegularText>
                    </StyledTouchable>
                    <Spacer height={20} />
                    <StyledTouchable
                        justifyContent="center"
                        alignContent="center"
                        paddingVertical={0}
                        paddingHorizontal={0}
                        opacity={0.8}
                        onPress={onPress}
                    >
                        <Ionicons
                            name="chatbubble-ellipses"
                            size={RFFontSize.xxl}
                            color={colors.white}
                        />
                        <RegularText
                            fontSize={fontSize.xs - 3}
                            color={colors.white}
                        >
                            {nFormatter(10700000)}
                        </RegularText>
                    </StyledTouchable>
                    <Spacer height={20} />
                    <StyledTouchable
                        justifyContent="center"
                        alignContent="center"
                        paddingVertical={0}
                        paddingHorizontal={0}
                        opacity={0.8}
                        onPress={onPress}
                    >
                        <Fontisto
                            name="share-a"
                            size={RFFontSize.xxl - 4}
                            color={colors.white}
                        />
                        <RegularText
                            fontSize={fontSize.xs - 3}
                            color={colors.white}
                        >
                            {nFormatter(30900)}
                        </RegularText>
                    </StyledTouchable>
                    <Spacer height={70} />
                </Row>
            </ViewContainer>
        </Row>
    )
}