// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Home from './Home'
// import Orders from './Orders'
// import Profile from './Profile'
// import Icon from "react-native-vector-icons/Ionicons";


// const DriverTab = () => {

//  const Tab = createBottomTabNavigator();

//  return (
//   <Tab.Navigator>
//    <Tab.Screen name="Home" 
//     options={{
//      headerShown: false,
//      tabBarIcon: ({ color, size }) => (
//        <Icon name="home" size={size} color={color} />
//      ),
//    }} component={Home}/>
//    <Tab.Screen name="orders"
//    options={{
//     headerShown: false,
//     tabBarIcon: ({ color, size }) => (
//       <Icon name="basket" size={size} color={color} />
//     ),
//   }} component={Orders}/>
//    <Tab.Screen name="Profile" 
//    options={{
//     headerShown: false,
//     tabBarIcon: ({ color, size }) => (
//       <Icon name="person" size={size} color={color} />
//     ),
//   }} component={Profile}/>
//   </Tab.Navigator>
//  )
// }

// export default DriverTab;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Orders from './Orders';
import Profile from './Profile';
import Icon from "react-native-vector-icons/Ionicons";

const DriverTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false, // Hide labels below icons
        tabBarActiveTintColor: 'tomato', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
        tabBarStyle: {
          backgroundColor: '#fff', // Custom background color for the tab bar
          borderTopWidth: 0, // Optional: removes the border at the top of the tab bar
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="basket" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DriverTab;
