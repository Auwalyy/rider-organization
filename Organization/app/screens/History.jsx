import React from "react";
import { View, Text, StyleSheet } from "react-native";

const History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Earnings Overview</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Total Earnings</Text>
        <Text style={styles.value}>$10,000</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>This Month</Text>
        <Text style={styles.value}>$1,200</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Last Month</Text>
        <Text style={styles.value}>$1,500</Text>
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

export default History;
