import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function excercises() {
    const router = useRouter();
    const item = useLocalSearchParams()
    console.log(item)
    return (
        <View className='mt-20'>
            <Text>excercises</Text>
            <TouchableOpacity onPress={() => router.back()}>
                <Text>Go back</Text>
            </TouchableOpacity>
        </View>
    )
}