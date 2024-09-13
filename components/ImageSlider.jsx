import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';
import { sliderImage } from '../constants'; // Ensure sliderImage is correctly imported and structured
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

const ImageSlider = () => {
    return (
        <View>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                autoPlayInterval={3000}
                data={sliderImage}
                scrollAnimationDuration={1000}
                renderItem={({ item, animationValue }) => (
                    <ItemCard item={item} animationValue={animationValue} />
                )}
                panGestureHandlerProps={{ activeOffsetX: [-10, 10] }} // Enable drag gestures
            />
        </View>
    );
};

export default ImageSlider;

const ItemCard = ({ item, animationValue }) => {
    // Parallax effect: shift the image based on animationValue
    const translateX = interpolate(animationValue.value, [-1, 0, 1], [-50, 0, 50], Extrapolate.CLAMP);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', width: wp(100) - 70 }}>
            <Animated.View style={{ transform: [{ translateX }] }}>
                <Image
                    source={item}
                    style={{
                        width: width - 40,
                        height: width / 2,
                        borderRadius: 20, // Rounded corners
                        resizeMode: 'cover', // Scale image properly
                    }}
                />
            </Animated.View>
        </View>
    );
};
