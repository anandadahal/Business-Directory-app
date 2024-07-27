import { View, Text, Image, TouchableOpacity,StyleSheet } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { Colors } from "@/constants/Colors";
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();
export default function Loginscreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View>
      <View style={{ display: "flex", alignItems: "center", marginTop: 100 }}>
        <Image
          source={require("../assets/images/login.png")}
          style={{
            width: 250,
            height: 500,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: "#000",
          }}
        />
      </View>
      <View style={{ backgroundColor: "#fff",padding:20,marginTop:-20 }}>
        <Text style={{ fontSize: 25, fontFamily: "outfit-bold" ,textAlign:"center",marginTop:-20}}>Your ultimate 
            <Text style={{ color:Colors.PRIMARY}}> Community Business Directory</Text>App
           </Text>
           <Text style={{textAlign:"center",
           fontSize:15,
           fontFamily:"outfit",
           marginTop:10,
           color:Colors.GRAY

        
        }}>Find your favorite business near you and post your own business to your Community</Text>


        <TouchableOpacity onPress={onPress}>
            <Text style={styles.btn}>Let's get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    btn:{
        fontSize:15,
        backgroundColor:Colors.PRIMARY,
        color:"#fff",
        textAlign:"center",
        padding:15,
        borderRadius:99,
        marginTop:20

    }


})