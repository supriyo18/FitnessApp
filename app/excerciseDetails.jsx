import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const excerciseDetails = () => {
    const item = useLocalSearchParams();
    return (
        <View>
            <Text>excerciseDetails</Text>
        </View>
    )
}

export default excerciseDetails

const styles = StyleSheet.create({})
