"use client"

import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function WelcomeScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/logoIoT.png')} style={styles.logo} /> 
        <Text style={styles.title}>Plateforme IoT !</Text> 
        <Text style={styles.subtitle}>
          Connectez-vous ou créez un compte pour commencer pour gérez vos objets connectés intelligemment, en toute sécurité, à tout moment.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={[styles.buttonText, styles.registerButtonText]}>
            Inscription
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
  },
  logo: {
    width: 150, // Ajustez la largeur selon vos besoins
    height: 150, // Ajustez la hauteur selon vos besoins
    resizeMode: 'contain', // 'cover', 'stretch', 'center' sont aussi des options
    marginBottom: 30, // Espace entre le logo et le titre
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 350,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#4a6da7",
  },
  registerButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#4a6da7",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  registerButtonText: {
    color: "#4a6da7",
  },
})