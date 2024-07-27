import { View, Text, TextInput } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Colors } from "../../constants/Colors";
import { Feather } from '@expo/vector-icons';
export default function Header() {
  //const {user} = useUser();
  return (
    //<image source ={{uri:user?.profileImageUrl}}/>
    //{user?.username}
    <View
      style={{ padding: 20, paddingTop: 50, backgroundColor: Colors.PRIMARY ,borderBottomLeftRadius:20,borderBottomRightRadius:20}}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("../../assets/images/add.png")}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />

        <View >
          <Text style={{ color: "#fff" }}>welcome,</Text>
          <Text style={{ fontSize: 20, fontFamily: "outfit-medium" ,color: "#fff"}}>
            Ananda Dahal
          </Text>
        </View>
      </View>
      <View  style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10,marginTop:20,backgroundColor:"#fff",padding:10,borderRadius:10,
      
    
    }}
      
      
      ><Feather name="search" size={24} color="black" />
      <TextInput placeholder="Search"/>
      </View>
      
    </View>
  );
}
