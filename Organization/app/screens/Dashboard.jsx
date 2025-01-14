import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
 
const Dashboard = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8fafb', paddingVertical: 4 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f8fafb',
          padding: 16,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: '#0e141b',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Dashboard
        </Text>
      </View>

      {/* Performance Section */}
      <ScrollView>
        <Text
          style={{
            color: '#0e141b',
            fontSize: 22,
            fontWeight: 'bold',
            marginHorizontal: 16,
            marginTop: 20,
            marginBottom: 12,
          }}
        >
          Performance
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 16,
            paddingHorizontal: 16,
            paddingBottom: 24,
          }}
        >
          {/* Deliveries */}
          <View style={{ flex: 1, minWidth: 180, gap: 8 }}>
            <Text style={{ color: '#0e141b', fontSize: 16, fontWeight: '500' }}>Deliveries</Text>
            <Text style={{ color: '#0e141b', fontSize: 32, fontWeight: 'bold' }}>4,000</Text>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Text style={{ color: '#4f7396', fontSize: 14 }}>1 month</Text>
              <Text style={{ color: '#078838', fontSize: 14, fontWeight: '500' }}>+5%</Text>
            </View>
            <View style={{ minHeight: 180, paddingVertical: 16 }}>
              
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ color: '#4f7396', fontSize: 13, fontWeight: 'bold' }}>John</Text>
                <Text style={{ color: '#4f7396', fontSize: 13, fontWeight: 'bold' }}>David</Text>
                {/* Add more names here */}
              </View>
            </View>
          </View>
          {/* Add similar blocks for Ratings and Average Delivery Time */}
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View
        style={{
          flexDirection: 'row',
          borderTopWidth: 1,
          borderTopColor: '#e8edf3',
          backgroundColor: '#f8fafb',
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
      >
        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
           
          <Text style={{ color: '#0e141b', fontSize: 12, fontWeight: '500' }}>Home</Text>
        </TouchableOpacity>
        {/* Add other footer navigation buttons here */}
      </View>
    </View>
  );
};

export default Dashboard;
