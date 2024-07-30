import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { collection, query, doc,getDocs } from "firebase/firestore";
import { db } from "../../../Configs/FirebaseConfig";
export default function businessdetail() {
    const { businessid } = useLocalSearchParams();
    const GetBusinessDetailById=async()=>{

       const docRef = doc(db, "BusinessList", businessid);
      
      const doc=await getDocs(docRef);
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          setBusinessList((prev) => [...prev, doc.data()]);
        });

    }
  return (
    <View>{businessid}</View>
  )
}