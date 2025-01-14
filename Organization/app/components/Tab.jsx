import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import BusinessDashboard from "../screens/BusinessDashboard";
import RiderManagement from "../screens/RiderManagement";
import History from "../screens/History";
import Profile from "../screens/BusinessProfile";
import AddRider from "../screens/AddRider";
import Dashboard from "../screens/Dashboard";
import { RiderContext } from "../screens/RiderContext";

const TabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
     <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10, // For shadow effect on Android
        },
        tabBarActiveTintColor: "#007BFF",
        tabBarInactiveTintColor: "#aaa",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={BusinessDashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Riders"
        component={RiderManagement}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="bicycle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="add rider"
        component={AddRider}
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TouchableOpacity
              style={styles.addButtonContainer}
              activeOpacity={0.8}
              {...props}
            >
              <View style={styles.addButton}>
                <Icon name="add" size={32} color="#fff" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="wallet" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),

        }}
      />
    </Tab.Navigator>
   );
};

const styles = StyleSheet.create({
  addButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: -20,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#007BFF",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Shadow for Android
  },
});

export default TabNav;
