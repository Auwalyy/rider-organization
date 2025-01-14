import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  FlatList,
  Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [location, setLocation] = useState(null);
  const [rides, setRides] = useState([]);
  const [currentRide, setCurrentRide] = useState(null);

  const BACKEND_URL = "https://your-backend-url.com"; // Replace with your backend URL
  const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your Google Maps API key

  // Get driver's location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "Location access is required to use this app.");
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  // Update online status in the backend
  const toggleOnlineStatus = async () => {
    setIsOnline(!isOnline);
    try {
      await axios.post(`${BACKEND_URL}/driver/status`, {
        online: !isOnline,
        location,
      });
    } catch (error) {
      Alert.alert("Error", "Failed to update status.");
    }
  };

  // Fetch recent rides
  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/driver/rides`);
        setRides(response.data);
      } catch (error) {
        Alert.alert("Error", "Failed to load rides.");
      }
    };
    fetchRides();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.profilePic}
        />
        <View style={styles.headerContent}>
          <Text style={styles.driverName}>John Doe</Text>
          <Text>Earnings Today: $50.00</Text>
        </View>
        <Switch value={isOnline} onValueChange={toggleOnlineStatus} />
        <Text>{isOnline ? "Online" : "Offline"}</Text>
      </View>

      {/* Map */}
      <View style={styles.mapContainer}>
        {location && (
          <MapView style={styles.map} region={location}>
            <Marker coordinate={location} />
          </MapView>
        )}
      </View>

      {/* Active Ride or No Job */}
      <View style={styles.jobContainer}>
        {currentRide ? (
          <View style={styles.activeJob}>
            <Text>Pickup: {currentRide.pickup}</Text>
            <Text>Dropoff: {currentRide.dropoff}</Text>
            <View style={styles.jobActions}>
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.buttonText}>Start Trip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.noJob}>
            <Text style={styles.motivationText}>
              No active rides. Set Online to start accepting requests!
            </Text>
          </View>
        )}
      </View>

      {/* Recent Rides */}
      <View style={styles.rideSummary}>
        <Text style={styles.sectionTitle}>Recent Rides</Text>
        <FlatList
          data={rides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.rideItem}>
              <Text>{item.date}</Text>
              <Text>{item.distance}</Text>
              <Text>{item.fare}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: { flexDirection: "row", alignItems: "center", padding: 16, backgroundColor: "#fff" },
  profilePic: { width: 50, height: 50, borderRadius: 25 },
  headerContent: { flex: 1, marginLeft: 10 },
  driverName: { fontSize: 18, fontWeight: "bold" },
  mapContainer: { flex: 1, position: "relative" },
  map: { flex: 1 },
  activeJob: { padding: 16, backgroundColor: "#fff", position: "absolute", bottom: 0, width: "100%" },
  jobActions: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  startButton: { backgroundColor: "green", padding: 10, borderRadius: 5 },
  cancelButton: { backgroundColor: "red", padding: 10, borderRadius: 5 },
  noJob: { padding: 16, alignItems: "center", justifyContent: "center" },
  motivationText: { fontSize: 16, textAlign: "center", marginBottom: 10 },
  rideSummary: { padding: 16, backgroundColor: "#fff" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  rideItem: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
