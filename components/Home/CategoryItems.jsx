import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryItems({ category, onCategoryPress }) {
  return (
    <TouchableOpacity
    onPress={() => onCategoryPress(category)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          padding: 20,
          marginRight: 10,
          marginLeft: 10,
          backgroundColor: "#ffd8d8",
          borderRadius: 99,
        }}
      >
        <Image
          source={{ uri: category.icon }}
          style={{ width: 40, height: 40, borderRadius: 10 }}
        />
      </View>

      <Text
        style={{
          fontFamily: "outfit-medium",
          alignItems: "center",
          marginTop: 5,
          fontSize: 15,
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
