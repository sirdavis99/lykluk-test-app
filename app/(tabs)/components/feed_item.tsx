import { Row } from "@components/views";
import { useThemeMode } from "@providers/hooks"
import { AVPlaybackSource, AVPlaybackStatus, AVPlaybackStatusSuccess, ResizeMode, Video } from "expo-av"
import React, { useRef, useState } from "react"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { FeedAction } from "./feed_action"
import { FeedAbout } from "./feed_about"
import { FeedHeader } from "./feed_header"
import { Asset, useAssets } from "expo-asset";
import { useWindowDimensions } from "react-native";
import IsInview from 'react-native-isinview'
import { RFValue } from "react-native-responsive-fontsize";

export interface FeedItemProps {
    source?: AVPlaybackSource
}
export const FeedItem: React.FC<FeedItemProps> = ({
    source
}) => {
    const video = useRef<Video>(null);
    const [status, setStatus] = useState<AVPlaybackStatus>();
    const { colors } = useThemeMode()
    const { height, width } = useWindowDimensions()
    const { top, bottom } = useSafeAreaInsets()
    const [overridePlayback, setOverridePlayback] = useState(false);

    const togglePlay = () => {
        setOverridePlayback(true)
        if (status && (status as AVPlaybackStatusSuccess)?.isPlaying) {
            video?.current?.pauseAsync()
        } else {
            video?.current?.playAsync()
        }
    }

    return (
        <IsInview
            onChange={(inView: boolean) => {
                // console.log('Inview: '+ inView)
                if (inView && !overridePlayback) {
                    video?.current?.playAsync()
                } else if(!inView) {
                    setOverridePlayback(false)
                    video?.current?.pauseAsync()
                }
            }}
        >
            <SafeAreaView
                edges={['top']}
                style={{
                    flex: 1,
                    // height: height - (top + bottom),
                    height: height - (top + bottom),
                    paddingHorizontal: 0,
                    flexGrow: 1,
                    // paddingBottom: 10,
                    backgroundColor: "#000"
                }}

            >
                <Video
                    ref={video}
                    isMuted={false}
                    style={{
                        position: "absolute",
                        height: height - (top + bottom),
                        zIndex: -1,
                        width: "100%",
                        flex: 1
                    }}
                    source={source}
                    useNativeControls={false}
                    resizeMode={ResizeMode.COVER}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <Row
                    // flex={1}
                    flexGrow={1.5}
                    height={'100%'}
                    flexDirection='column'
                    alignContent='space-between'
                // backgroundColor="green"
                >
                    <FeedAction
                        isPlaying={(status as AVPlaybackStatusSuccess)?.isPlaying}
                        onTogglePlayback={() => togglePlay()}
                    />
                    <FeedAbout />
                </Row>
            </SafeAreaView>
        </IsInview>
    )
}