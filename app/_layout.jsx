import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text, View } from 'react-native';
import Loginscreen from "../components/Loginscreen";
export default function RootLayout() {
  useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>

      <Loginscreen/>
      </SignedIn>
      <SignedOut>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
     
      </SignedOut>
    
    </ClerkProvider>
  );
}
