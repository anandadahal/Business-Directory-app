import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams,useNavigation  } from 'expo-router';
export default function Businesslist() {

    const navigation = useNavigation();
    const {category}=useLocalSearchParams();
    useEffect(() => {
        navigation.setOptions({
            headerTitle:category
 
        });
        getBusinessList()
    }, [])
    /**
     * 
     * used to get business list by category
     */
    const getBusinessList=async (category)=>{

const q = query(collection(db, "BusinessList"), where("category", "==", category));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.data());
 
});
    }
  return (
    <View>
      <Text>{category}</Text>
    </View>
  )
}