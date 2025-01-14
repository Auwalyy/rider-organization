import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [CAC, setCAC] = useState("");
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState("");

  // Function to fetch profile
  const fetchProfile = async () => {
    try {
      const response = await axios.get("http://192.168.43.32:3000/api/auth/fetch-profile");
      const { email, phoneNumber, name, address, CAC, companyPhoneNumber } = response.data;
      setEmail(email);
      setPhone(phoneNumber);
      setName(name);
      setAddress(address);
      setCAC(CAC);
      setCompanyPhoneNumber(companyPhoneNumber);
    } catch (error) {
      console.log("Error fetching profile: ", error);
      Alert.alert("Error", "Failed to fetch profile.");
    }
  };

  // Function to update profile
  const handleUpdateProfile = async () => {
    if (!email || !phone || !name || !address || !CAC) {
      Alert.alert("Error", "Please fill all fields!");
      return;
    }

    try {
      const response = await axios.put("http://192.168.43.32:3000/api/auth/update-profile", {
        email,
        phoneNumber: phone,
        name,
        address,
        CAC,
        companyPhoneNumber
      });
      Alert.alert("Success", "Profile updated successfully!");
    } catch (error) {
      console.log("Error updating profile: ", error);
      Alert.alert("Error", "Failed to update profile.");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        editable={false} // Email is not editable
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="phone number"
        value={companyPhoneNumber}
        onChangeText={setCompanyPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="CAC"
        value={CAC}
        onChangeText={setCAC}
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
});

export default Profile;
