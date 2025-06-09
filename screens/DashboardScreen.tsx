// screens/DashboardScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import { useAuth } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import ReusableBottomTabs, { TabConfig } from '../components/ReusableBottomTabs';
import SettingsScreen from '../screens/SettingsScreen'; 

const fetchIoTData = async () => {
  await new Promise(r => setTimeout(r, 1000));

  return {
    gps: '48.8584° N, 2.2945° E',
    map: {
      description: 'GPS', 
    },
    date: new Date(),
  };
};

const StatCard = ({ iconName, title, value, color, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ width: '48%' }}>
    <View style={[styles.card, { borderLeftColor: color, borderLeftWidth: 5 }]}>
      <View style={styles.cardHeader}>
        <Icon name={iconName} size={24} color={color} style={{ marginRight: 10 }} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <Text style={[styles.cardValue, { color }]}>{value}</Text>
    </View>
  </TouchableOpacity>
);

export const DashboardScreenContent = ({ navigation }) => {
  const { user, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [iotData, setIotData] = useState({
    gps: '...',
    map: { description: '...' }, 
    date: new Date(),
  });

  const loadDashboardData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchIoTData();
      setIotData(data);
    } catch (error) {
      console.error('Erreur récupération IoT:', error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadDashboardData();
  };

  const handleCardPress = () => {
    navigation.navigate('Map');
  };

  const formattedDate = iotData.date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedTime = iotData.date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Bienvenue,</Text>
          <Text style={styles.userName}>{user?.username}</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {isLoading && !refreshing ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#4a6da7" />
            <Text style={styles.loadingText}>Chargement des données...</Text>
          </View>
        ) : (
          <>
            <Text style={styles.sectionTitle}>Données IoT</Text>
            <View style={styles.statsContainer}>
              <StatCard iconName="location-outline" title="Position GPS" value={iotData.gps} color="#4a6da7" />
              <StatCard
                iconName="map"
                title="Position GPS"
                value={`${iotData.map.description}`}
                color="#f7b731"
                onPress={handleCardPress}
              />
              <StatCard iconName="calendar-outline" title="Date" value={formattedDate} color="#47b881" />
              <StatCard iconName="time-outline" title="Heure" value={formattedTime} color="#e8368f" />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#4a6da7',
  },
  welcomeText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    color: '#666',
  },
  cardValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

