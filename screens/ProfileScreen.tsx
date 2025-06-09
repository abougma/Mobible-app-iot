import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../context/AuthContext';

const ProfileScreen = () => {
  const { user, logout } = useAuth(); 

  const handleEditProfile = () => {
    Alert.alert("Modifier le profil", "Fonctionnalité à implémenter.");
  };

  const handleDeleteProfile = () => {
    Alert.alert(
      "Supprimer le profil",
      "Êtes-vous sûr de vouloir supprimer votre profil ? Cette action est irréversible.",
      [
        { text: "Annuler", style: "cancel" },
        { text: "Supprimer", onPress: () => {
            console.log("Profil supprimé (simulation)");
            logout(); 
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Icon name="person-circle-outline" size={100} color="#4a6da7" />
        <Text style={styles.userName}>{user?.username || 'Utilisateur'}</Text>
      </View>

      <TouchableOpacity style={[styles.button, styles.editButton]} onPress={handleEditProfile}>
        <Icon name="create-outline" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Modifier le profil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDeleteProfile}>
        <Icon name="trash-outline" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Supprimer le profil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={logout}>
        <Icon name="log-out-outline" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: '80%',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  editButton: {
    backgroundColor: '#4a6da7',
  },
  deleteButton: {
    backgroundColor: '#d9534f',
  },
  logoutButton: {
    backgroundColor: '#777', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonIcon: {
    marginRight: 10,
  }
});

export default ProfileScreen;