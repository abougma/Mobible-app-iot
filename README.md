# 📍 Application Mobile de Suivi GPS IoT

Cette application mobile permet de récupérer les données GPS d'un appareil IoT et de les afficher de manière interactive via un tableau de bord et une carte. Elle est développée avec **React Native** et **Expo**, facilitant ainsi le déploiement multiplateforme (iOS et Android).

---

## 🗂️ Sommaire

- [🚀 Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies](#-technologies)
- [📋 Prérequis](#-prérequis)
- [📦 Installation](#-installation)
- [📱 Utilisation](#-utilisation)
- [🤝 Contribuer](#-contribuer)
- [📄 Licence](#-licence)
- [👨‍💻 Auteur](#-auteur)

---

## 🚀 Fonctionnalités

- Authentification sécurisée (avec Firebase ou système personnalisé)
- Visualisation des coordonnées GPS en temps réel
- Carte interactive avec **react-native-maps**
- Tableau de bord des données collectées
- Déconnexion, navigation tabulée, gestion d’état via contexte

---

## 🛠️ Technologies

- **React Native** avec **Expo**
- **React Navigation** (pour la navigation)
- **React Native Maps** (affichage cartographique)
- **Context API** (gestion d’état global)
- **TypeScript** (optionnel, si utilisé)
- Autres bibliothèques : `axios`, `react-native-vector-icons`, etc.

---

## 📋 Prérequis

Avant de commencer, assurez-vous d’avoir installé :

- Node.js (version LTS recommandée).
- npm (généralement inclus avec Node.js) ou Yarn.
- Expo CLI :
  ```bash
  npm install -g expo-cli
  ```
- Application mobile Expo Go (iOS ou Android).
- (Optionnel) Un simulateur iOS/Android pour les tests locaux.

---

## 📦 Installation

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/abougma/Mobible-app-iot.git
    cd Mobible-app-iot
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```
    ou avec Yarn :
    ```bash
    yarn install
    ```

3.  **Lancer le projet :**
    ```bash
    expo start
    ```

4.  **Scanner le QR code :**
    - Ouvrez l'application Expo Go sur votre téléphone.
    - Scannez le QR code affiché dans le terminal ou la page web qui s'ouvre.

---

## 📱 Utilisation

Une fois l’application lancée, vous pourrez :

- Vous connecter ou créer un compte.
- Accéder à la carte interactive.
- Voir les coordonnées GPS de votre appareil IoT.
- Naviguer entre les onglets via le menu du bas.

---

## 🤝 Contribuer

Les contributions sont les bienvenues !

1. Forkez le projet.
2. Créez une branche : `git checkout -b feature/NouvelleFonctionnalite`.
3. Commitez vos modifications : `git commit -m "Ajout de la fonctionnalité X"`.
4. Poussez la branche : `git push origin feature/NouvelleFonctionnalite`.
5. Ouvrez une Pull Request.

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d’informations.

---

## 👨‍💻 Auteur

Bougma Armel

LinkedIn | GitHub
