import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AddRider from './AddRider'
import TabNav from "../components/Tab";

const BusinessDashboard = () => {
  return (
    <View  style={styles.container}>
    <Text style={styles.title}>Dashboard</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Number of Riders</Text>
        <Text style={styles.value}>15</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Completed Deliveries</Text>
        <Text style={styles.value}>120</Text>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  label: { fontSize: 16, color: "#555" },
  value: { fontSize: 20, fontWeight: "bold", marginTop: 4 },
});

export default BusinessDashboard;
