import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const VerifyEmail = ({ route }) => {
  const navigation = useNavigation();
  const { email } = route.params;
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerification = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://192.168.43.32:3000/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: verificationCode }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Save the token to AsyncStorage
        if (data.token) {
          await AsyncStorage.setItem("token", data.token);
        }
        Alert.alert("Success", "Email verified successfully!");
        navigation.navigate("Tab"); // Navigate to dashboard
      } else {
        Alert.alert("Error", data.message || "Invalid verification code!");
      }
    } catch (error) {
      Alert.alert("Error", "Unable to verify. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.subtitle}>
        A verification code has been sent to {email}.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter verification code"
        value={verificationCode}
        onChangeText={(text) => setVerificationCode(text)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={handleVerification}
        disabled={loading}
      >
        <Text style={styles.btnText}>
          {loading ? "Verifying..." : "Verify"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyEmail;

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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
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
