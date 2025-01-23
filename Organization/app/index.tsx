// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import TabNav from "./components/Tab"; // Business Tab Navigation
// import DriverTab from "./driver/DriverTab"; // Driver Tab Navigation
// import BusinessSignup from "./(auth)/BusinessSignup";
// import BusinessLogin from "./(auth)/BusinessLogin";
// import RiderManagement from "./screens/RiderManagement";

// const Stack = createNativeStackNavigator();

// export default function Index() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="BusinessLogin"
//         screenOptions={{
//           headerShown: false, // Hide the default header for all screens
//         }}
//       >
//         {/* Business Dashboard Screens */}
//         <Stack.Screen name="BusinessLogin" component={BusinessLogin} />
//         <Stack.Screen name="BusinessSignup" component={BusinessSignup} />
//         <Stack.Screen name="Tab" component={TabNav} />

//         {/* Rider Management Screen */}
//         <Stack.Screen name="RiderManagement" component={RiderManagement} />

//         {/* Driver Dashboard */}
//         <Stack.Screen name="DriverTab" component={DriverTab} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// // Example Styling
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View className="flex items-center justify-center bg-blue">
      <Text>dex</Text>
    </View>
  )
}

export default index