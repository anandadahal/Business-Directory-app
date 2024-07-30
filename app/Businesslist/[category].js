import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../Configs/FirebaseConfig";
import { useLocalSearchParams, useNavigation } from 'expo-router';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';

export default function Businesslist() {
    const navigation = useNavigation();
    const { category } = useLocalSearchParams();
    const [BusinessList, setBusinessList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigation.setOptions({ 
            headerTitle: category
        });
        getBusinessList(category);
    }, [category]);

    const getBusinessList = async (category) => {
        try {
            const q = query(collection(db, "BusinessList"), where("category", "==", category));
            const querySnapshot = await getDocs(q);
            const businessListData = [];
            querySnapshot.forEach((doc) => {
                // businessListData.push(doc.data());
                setBusinessList((prev) => [...prev, {id: doc?.id, ...doc.data()}]);
            });
            // setBusinessList(businessListData);
        } catch (error) {
            console.error("Error fetching business list: ", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {BusinessList.length > 0 ? (
                <FlatList
                    data={BusinessList}
                    renderItem={({ item, index }) => (
                        <BusinessListCard
                            business={item}
                            key={index}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            ) : (
                <Text style={styles.noBusinessText}>No Business Found</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    loadingText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'outfit-bold',
        marginTop: 20,
    },
    noBusinessText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'outfit-bold',
        marginTop: '50%',
    },
});
