import { View, Image, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function PopularBusinessCard({ business }) {
  return (
    <View
      style={{
        marginLeft: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
      }}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: 250, height: 150, padding: 10, borderRadius: 10 }}
      />
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 15 }}>
          {business?.name}
        </Text>
        <Text
          style={{ fontFamily: "outfit", fontSize: 15, color: Colors.GRAY }}
        >
          {business?.address}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            justifyContent:"space-between",
            gap: 5,
          }}
        >
     <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:5 ,}}>
     <Image
            source={require("../../assets/images/star.png")}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ fontFamily: "outfit", fontSize: 10 }}> 4.5</Text>
     </View>
     <Text style={{ fontFamily: "outfit", fontSize: 15 ,backgroundColor:Colors.PRIMARY,padding:5,color:"white",borderRadius:10}}>{business?.category}</Text>
    
        </View>
      </View>
    </View>
  );
}
