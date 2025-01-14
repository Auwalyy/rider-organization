// RiderCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RiderCard = ({ rider }) => {
  return (
    <View style={styles.card}>
      <Text>Name: {rider.name}</Text>
      <Text>Phone: {rider.phoneNumber}</Text>
      <Text>Vehicle: {rider.vehicleDetails}</Text>
      <Text>Status: {rider.availabilityStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
});

export default RiderCard;
