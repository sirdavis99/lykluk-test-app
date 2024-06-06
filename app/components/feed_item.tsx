import { Row, ViewContainer } from "@components/views";
import { useThemeMode } from "@providers/hooks"
import { AVPlaybackSource, AVPlaybackStatus, AVPlaybackStatusSuccess, ResizeMode, Video } from "expo-av"
import React, { useRef, useState } from "react"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { FeedAction } from "./feed_action"
import { FeedAbout } from "./feed_about"
import { useWindowDimensions } from "react-native";
import InViewPort from 'react-native-lightweight-inview'
import { debounce } from "lodash";
import { Slider } from "@rneui/base";
import { fontSize } from "@components/text";

export interface FeedItemProps {
    source?: AVPlaybackSource
}
export const FeedItem: React.FC<FeedItemProps> = ({
    source
}) => {
    const video = useRef<Video>(null);
    const [status, setStatus] = useState<AVPlaybackStatus>();
    const [playCount, setPlayCount] = useState(0);
    const { colors } = useThemeMode()
    const { height, width } = useWindowDimensions()
    const { top, bottom } = useSafeAreaInsets()
    const [overridePlayback, setOverridePlayback] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);


    const togglePlay = () => {
        setOverridePlayback(true)
        if (status && (status as AVPlaybackStatusSuccess)?.isPlaying) {
            video?.current?.pauseAsync()
        } else {
            video?.current?.playAsync()
        }
    }

    const autoPlay = (inView: boolean) => {
        const pendAction = debounce(() => {
            setPlayCount(0);
            // console.log('Inview: '+ inView)
            if (inView && !overridePlayback) {
                video?.current?.playAsync()
            } else if (!inView) {
                setOverridePlayback(false)
                video?.current?.pauseAsync()
            }
        }, 500)

        pendAction()
    }


    const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
        // console.log(playCount, (status as AVPlaybackStatusSuccess)?.didJustFinish, (status as AVPlaybackStatusSuccess)?.isPlaying)
        setStatus(status)
        setSliderValue((status as AVPlaybackStatusSuccess)?.positionMillis / ((status as AVPlaybackStatusSuccess)?.durationMillis ?? 0));
        if (status && (status as AVPlaybackStatusSuccess)?.isPlaying) {
            if ((status as AVPlaybackStatusSuccess)?.didJustFinish && (playCount < 3)) {
                setPlayCount(playCount + 1);
            } else if (playCount >= 3) {
                video?.current?.pauseAsync();
            }
        }
    };

    const handleSeek = (value: number) => {
        const previousSliderValue = sliderValue;
        setSliderValue(value);
        video?.current?.pauseAsync();
        const pendAction = debounce(() => {
            if (video?.current) {
                
                video?.current.playFromPositionAsync(value * ((status as AVPlaybackStatusSuccess)?.durationMillis ?? 0));
            } else {
                setSliderValue(previousSliderValue);
            }
        }, 500)

        pendAction()
    };



    return (
        <InViewPort
            onChange={(inView: boolean) => autoPlay(inView)}
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
                    onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
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
                <ViewContainer
                    paddingHorizontal={0}
                    width={width}
                    zIndex={9}
                    bottom={0}
                    position="absolute"
                >
                    <Slider
                        minimumValue={0}
                        maximumValue={1}
                        value={sliderValue ? sliderValue : 0}
                        onSlidingComplete={handleSeek}
                        // animateTransitions
                        style={{ height: 19}}
                        minimumTrackTintColor={colors.white}
                        maximumTrackTintColor={colors.primary}
                        trackStyle={{ height: 2, backgroundColor: colors.white }}
                        thumbStyle={{ height: fontSize.xxs, width: fontSize.xxs, backgroundColor: colors.white }}
                        allowTouchTrack
                    />
                </ViewContainer>
            </SafeAreaView>
        </InViewPort>
    )
}