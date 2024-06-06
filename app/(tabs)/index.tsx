import { BaseView, Spacer } from '@components/views';
import { FeedHeader, FeedItem } from '../components';
import { useAssets } from 'expo-asset';
import Video1 from "assets/videos/vid-1.mp4"
import Video2 from "assets/videos/vid-2.mp4"
import Video3 from "assets/videos/vid-3.mp4"
import { FlatList, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { heightPixel } from '@utils/pxToDpConvert';
import { LinearGradient } from 'expo-linear-gradient';

export default function DashboardScreen() {
    const { height, width } = useWindowDimensions()
    const { top, bottom } = useSafeAreaInsets()
    const [assets, error] = useAssets([Video1, Video2, Video3]);

    // console.log(error)

    return (
        <BaseView
            backgroundColor={"#000"}
            focusBarStyle='light-content'
        >
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.5)', 'transparent']}
                style={{
                    zIndex: 4,
                    position: 'absolute',
                    paddingTop: top,
                    paddingBottom: 20,
                    width
                }}
            >
                <FeedHeader />
            </LinearGradient>

            <FlatList
                data={assets}
                keyExtractor={(item, index) => `${index}`}
                showsVerticalScrollIndicator={false}
                snapToAlignment="start"
                decelerationRate={"fast"}
                initialScrollIndex={0}
                disableIntervalMomentum
                snapToInterval={(height - (top + bottom))}
                renderItem={({ item, index }) => (
                    <FeedItem
                        source={item}
                        key={`${index}`}
                    />
                )}
                ListFooterComponent={<Spacer height={bottom + heightPixel(50)} />}
                contentContainerStyle={{ backgroundColor: "#000" }}
                style={{ backgroundColor: "#000" }}
            />
        </BaseView>
    )
}
