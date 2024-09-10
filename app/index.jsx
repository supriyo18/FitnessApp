import { View, Text, Image, TouchableOpacity } from 'react-native'
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';

import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
const index = () => {
    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style='light' />
            <Image className="h-full w-full absolute"
                source={require('../assets/images/welcome.png')}
            />

            <LinearGradient
                colors={['transparent', '#171a15']}
                style={{ width: wp(100), height: hp(65) }}

                className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View entering={FadeInDown.delay(200).springify()} className="flex items-center justify-end">
                    <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
                        Best <Text className="text-rose-500">Workouts</Text>
                    </Text>
                    <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
                        For You
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(250).springify()}>
                    <TouchableOpacity
                        style={{ height: hp(7), width: wp(80) }}
                        className="bg-rose-500 flex mx-auto rounded-full justify-center items-center shadow-lg"
                        activeOpacity={0.8}  // Press effect
                    >
                        <Text style={{
                            fontSize: hp(2.5),  // Font size
                            color: '#fff',  // Text color
                            fontWeight: 'bold',  // Bold text
                            letterSpacing: 1,  // Letter spacing
                        }}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>

            </LinearGradient>
        </View>
    )
}

export default index