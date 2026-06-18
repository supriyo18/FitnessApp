import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExcerciseBodyPart } from '../api/excerciseDB.js';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExcerciseList from '../components/ExcerciseList.jsx';
import { ScrollView } from 'react-native-virtualized-view'
import { Image } from 'expo-image';

export default function Exercises() {
    const router = useRouter();
    const item = useLocalSearchParams();
    const [excercise, setExcercise] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (item.name) {
            getExercise(item.name);
        }
    }, [item]);

    const getExercise = async (bodyPart) => {
        setLoading(true);
        setError(null);
        try {
            console.log('calling API');
            const data = await fetchExcerciseBodyPart(bodyPart);
            console.log('API DATA JSON', data);
            setExcercise(data);
        } catch (error) {
            console.error("Error fetching exercise data:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    console.log('excerises section Image ', item.image);

    return (
        < ScrollView contentContainerStyle={styles.container} >
            <StatusBar style='light' />
            <Image
                source={{ uri: item.image }}
                style={styles.image}
                onError={(e) => console.error('Image loading error:', e.nativeEvent.error)}
            />
            <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
            >
                <Ionicons name="caret-back-circle-sharp" size={hp(4)} color="white" />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {item.name} exercises
                </Text>
            </View>
            {
                loading ? (
                    <Text style={styles.loadingText}>Loading...</Text>
                ) : error ? (
                    <Text style={styles.errorText}>Error: {error}</Text>
                ) : (
                    <View style={styles.exercisesContainer}>
                        <ExcerciseList data={excercise} />
                    </View>
                )
            }
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: wp(100),
        height: hp(45),
        position: 'absolute',
        top: 0,
        left: 0,
    },
    backButton: {
        position: 'absolute',
        height: hp(5.5),
        width: wp(5.5),
        marginTop: hp(7),
        marginLeft: wp(4),
        backgroundColor: 'rgba(255, 0, 0, 0.8)', // Assuming 'bg-rose-500' is a shade of red
        borderRadius: hp(2.75),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: hp(45), // Space for image
        marginHorizontal: wp(4),
    },
    text: {
        fontSize: hp(3),
        fontWeight: '600',
        color: '#6b6b6b', // Gray shade
    },
    loadingText: {
        textAlign: 'center',
        marginTop: hp(20),
        fontSize: hp(2.5),
    },
    errorText: {
        textAlign: 'center',
        marginTop: hp(20),
        fontSize: hp(2.5),
        color: 'red',
    },
    exercisesContainer: {
        marginBottom: hp(10),
    },
});
