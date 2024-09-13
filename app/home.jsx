import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyPart from '../components/BodyPart';

const Home = () => {
    return (
        <SafeAreaView className='flex-1 bg-white' edges={['top']}>
            <StatusBar style='dark' />

            <View className='flex-row justify-between items-center mx-5'>
                <View className='space-y-2'>
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className='font-bold tracking-wider text-neutral-700'>
                        READY TO
                    </Text>
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className='font-bold tracking-wider text-rose-400'>
                        HUSTLE
                    </Text>
                </View>

                {/* Avatar and Notification Icon */}
                <View className='justify-center items-center'>
                    <Image
                        source={require('../assets/images/avatar.png')}
                        style={{ height: hp(6), width: hp(6) }}
                        className="rounded-full"
                    />
                    {/* Notification Icon with 2 units gap */}
                    <View style={{ marginTop: hp(2), height: hp(5.5), width: wp(5.5) }} className='bg-white rounded-full flex justify-center items-center border-[3px] border-neutral-300'>
                        <Ionicons name="notifications-circle" size={hp(3)} color="gray" />
                    </View>
                </View>
            </View>

            {/* ImageSlider */}
            <View style={{ flex: 1 }}>
                <ImageSlider />
            </View>

            {/* BodyParts */}
            <View style={{ flex: 1 }}>
                <BodyPart />
            </View>
        </SafeAreaView>
    );
};

export default Home;
