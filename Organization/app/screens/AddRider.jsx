import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const AddRider = ({ navigation, route }) => {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddRider = async () => {
    if (!name || !email || !phoneNumber || !plateNumber || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://192.168.43.32:3000/api/auth/add-rider",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          plateNumber,
          password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Rider added successfully!");
        setName("");
        setEmail("");
        setPhoneNumber("");
        setPlateNumber("");
        setPassword("");
        console.log(data);
        
       } else {
        Alert.alert("Error", data.message || "Unable to add rider.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add Rider</Text>

      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="directions-car" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Vehicle Details"
          value={plateNumber}
          onChangeText={setPlateNumber}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={handleAddRider}
        disabled={loading}
      >
        <Text style={styles.btnText}>
          {loading ? "Adding....." : "Add"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2f80ed",
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
    backgroundColor: "#2f80ed",
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

export default AddRider;
 