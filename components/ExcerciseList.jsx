import { View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ExcerciseList = ({ data }) => {
    const router = useRouter();

    return (
        <View >
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60, paddingTop: 20, flexGrow: 1 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item, index }) => <ExcerciseCard router={router} index={index} item={item} />}
            />
        </View>
    );
}

export default ExcerciseList;

const ExcerciseCard = ({ item, router, index }) => {
    return (
        <View>
            <TouchableOpacity className='flex py-3 space-y-3'
                onPress={() => router.push({ pathname: '/excerciseDetails', params: item })}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item.gifUrl }}
                        contentFit='cover'
                        style={styles.image}
                    />
                </View>
                <Text style={styles.text}>
                    {item?.name}
                </Text>

            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 10,
    },
    imageContainer: {
        backgroundColor: '#e0e0e0',
        borderRadius: 25,
        overflow: 'hidden', // Ensure image is rounded inside the container
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: wp(40), // Make the image larger
        height: hp(20),
        borderRadius: 25,
    },
    text: {
        fontSize: hp(2),
        color: '#424242',
        fontWeight: '600',
        marginTop: 10,
        textAlign: 'center',
    }
});