import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Paramètres</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingItem}>
          <Icon name="notifications-outline" size={24} color="#333" style={styles.icon} />
          <Text style={styles.settingText}>Activer les notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#4a6da7" }}
            thumbColor={isNotificationsEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleNotifications}
            value={isNotificationsEnabled}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apparence</Text>
        <View style={styles.settingItem}>
          <Icon name="contrast-outline" size={24} color="#333" style={styles.icon} />
          <Text style={styles.settingText}>Mode sombre</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkModeEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleDarkMode}
            value={isDarkModeEnabled}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.settingItem} onPress={() => alert('Fonctionnalité "Aide et Support" à implémenter')}>
        <Icon name="help-circle-outline" size={24} color="#333" style={styles.icon} />
        <Text style={styles.settingText}>Aide et Support</Text>
        <Icon name="chevron-forward-outline" size={24} color="#c7c7cc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={() => alert('Fonctionnalité "À propos" à implémenter')}>
        <Icon name="information-circle-outline" size={24} color="#333" style={styles.icon} />
        <Text style={styles.settingText}>À propos</Text>
        <Icon name="chevron-forward-outline" size={24} color="#c7c7cc" />
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 20, // Ajusté pour ne pas être sous la barre de statut si l'en-tête global est masqué
    paddingBottom: 10,
    color: '#333',
  },
  section: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#c8c7cc',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6d6d72',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5', // Léger fond pour séparer les titres de section
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#c8c7cc',
  },
  icon: {
    marginRight: 15,
  },
  settingText: {
    flex: 1,
    fontSize: 17,
    color: '#000',
  },
});
