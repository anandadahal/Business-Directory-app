import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
export default function BusinessListCard({ business }) {
 

  return (
    <View style={styles.card}>
      <Image source={{ uri: business?.imageUrl }} style={styles.image} />
      <View style={{flex:1, display:"flex",flexDirection:"column",gap:5}}>
      <Text style={styles.titlee}>{business?.name}</Text>
      <Text style={styles.title}>{business?.address}</Text>
{/*       
      <Text style={styles.text}> {business?.about}</Text>
      <Text style={styles.text}>{business?.category}</Text> */}
           <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:5 ,}}>
     <Image
            source={require("../../assets/images/star.png")}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ fontFamily: "outfit", fontSize: 10 }}> 4.5</Text>
     </View>

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
 display:"flex",
    flexDirection: 'row',
   gap: 10,

    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  
  },
  titlee: {
    fontSize: 17,
   fontFamily: "outfit-bold",

  },
  title: {
    fontSize: 15,
    fontFamily: "outfit",
    color: Colors.GRAY,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});
