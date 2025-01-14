import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


const RiderManagement = ({ route, navigation }) => {
   const [riders, setRiders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRiders = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://192.168.43.32:3000/api/auth/list-riders", {
         
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setRiders(data.riders);
      } else {
        Alert.alert("Error", data.message || "Unable to fetch riders.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveRider = async (_id) => {
    try {
      const response = await fetch('http://192.168.43.32:3000/api/auth/delete-rider', {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
         },
      });
      if (response.ok) {
        Alert.alert("Success", "Rider removed successfully.");
        fetchRiders();
      } else {
        Alert.alert("Error", "Unable to remove rider.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    fetchRiders();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rider Management</Text>
      <FlatList
        data={riders}
        keyExtractor={(item) => item._id}
        refreshing={loading}
        onRefresh={fetchRiders}
        renderItem={({ item }) => (
          <View style={styles.riderCard}>
            <View>
              <Text style={styles.riderName}>{item.name}</Text>
              <Text style={styles.riderDetails}>{item.phoneNumber}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleRemoveRider(item)}
              style={styles.removeBtn}
            >
              <Icon name="delete" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2f80ed",
    textAlign: "center",
    marginBottom: 10,
  },
  riderCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  riderName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  riderDetails: {
    fontSize: 14,
    color: "#666",
  },
  removeBtn: {
    backgroundColor: "#ff3b30",
    padding: 10,
    borderRadius: 5,
  },
  addBtn: {
    backgroundColor: "#2f80ed",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  addBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RiderManagement;


