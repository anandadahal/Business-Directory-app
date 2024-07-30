import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Configs/FirebaseConfig";
import { useRouter } from "expo-router";
import CategoryItems from "../../components/Home/CategoryItems";
export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    GetCategoryList();
  }, []);
  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setCategoryList((prev) => [...prev, doc.data()]);
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
          Category
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
        data={categoryList}
        renderItem={({ item, index }) => (
          <CategoryItems category={item} key={index} 
          onCategoryPress={(category) => router.push(`Businesslist/`+item.name)}
       
          />
        )}
      />
    </View>
  );
}
