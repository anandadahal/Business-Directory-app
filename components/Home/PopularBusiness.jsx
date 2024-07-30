import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from '../../constants/Colors';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Configs/FirebaseConfig";
import PopularBusinessCard from "./PopularBusinessCard";

export default function BusinessList() {
  const [BusinessList, setBusinessList] = useState([]);

  useEffect(() => {
    GetBusinessList();
  }, []);

  const GetBusinessList = async () => {
    setBusinessList([]);
    const q = query(collection(db, "BusinessList"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            paddingLeft: 10,
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          Popular Business
        </Text>
        <Text
          style={{
            paddingRight: 10,
            fontFamily: "outfit",
            fontSize: 15,
            color: Colors.PRIMARY,
          }}
        >
          View All
        </Text>
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={BusinessList}
        renderItem={({ item }) => (
          <PopularBusinessCard business={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
