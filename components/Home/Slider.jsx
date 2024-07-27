import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Configs/FirebaseConfig";
export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    GetSliderList();
  }, []);
  const GetSliderList = async () => {
    const q = query(collection(db, "Sliders"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View style>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20, padding: 10 }}>
        #Special for you
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={sliderList}
     
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: 300,
              height: 200,
              marginRight: 10,
              borderRadius: 15,
              marginLeft: 15,
            }}
          />
        )}
      />
    </View>
  );
}
