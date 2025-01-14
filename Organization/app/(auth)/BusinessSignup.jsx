// BusinessSignup.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const BusinessSignup = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyPhoneNumber: "",
    address: "",
    CAC: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://192.168.43.32:3000/api/auth/signup-org", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
         Alert.alert("Success", "Business signed up successfully!");
         console.log(data);
         
        navigation.navigate("Tab");
      } else {
        Alert.alert("Error", data.message || "Something went wrong!");
      }
    } catch (error) {
      Alert.alert("Error", "Unable to signup. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container} options={{headerShown: false}}>
      <Text style={styles.title}>Business Signup</Text>
      <View style={styles.inputContainer}>
        <Icon name="business" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          value={formData.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="location-on" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={formData.address}
          onChangeText={(text) => handleInputChange("address", text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={formData.companyPhoneNumber}
          onChangeText={(text) => handleInputChange("companyPhoneNumber", text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="description" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="CAC"
          value={formData.CAC}
          onChangeText={(text) => handleInputChange("CAC", text)}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={handleSignup}
        disabled={loading}
      >
        <Text style={styles.btnText}>{loading ? "Signing up..." : "Signup"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BusinessSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  btn: {
    backgroundColor: "#6753fc",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});



// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, Alert } from 'react-native';
// import axios from 'axios';

// const BusinessSignup = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [companyPhoneNumber, setCompanyPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [CAC, setCAC] = useState('');

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post('http:/192.168.43.32:3000/api/auth/signup-org', {
//         email,
//         password,
//         name,
//         companyPhoneNumber,
//         address,
//         CAC,
//       });

//       if (response.data.success) {
//         Alert.alert('Signup successful', 'You have successfully signed up.');
//         // Store token and navigate to rider management
//         navigation.navigate('RiderManagement');
//       }
//     } catch (error) {
//       console.error('Error signing up:', error.response ? error.response.data : error.message);
//       Alert.alert('Error signing up', error.response?.data?.message || 'Please try again later');
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <TextInput
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <TextInput
//         placeholder="Company Phone Number"
//         value={companyPhoneNumber}
//         onChangeText={setCompanyPhoneNumber}
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <TextInput
//         placeholder="Address"
//         value={address}
//         onChangeText={setAddress}
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <TextInput
//         placeholder="CAC Registration"
//         value={CAC}
//         onChangeText={setCAC}
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />
//       <Button title="Sign Up" onPress={handleSignup} />
//     </View>
//   );
// };

// export default BusinessSignup;
