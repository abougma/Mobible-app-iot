import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"

import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import WelcomeScreen from "./screens/WelcomeScreen"
import { AuthProvider, useAuth } from "./context/AuthContext"
import MainAppTabs from './navigation/MainAppTabs'; 

const Stack = createNativeStackNavigator()

function AppNavigator() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return null 
  }

  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName={!user ? "Welcome" : "AppHome"}
        screenOptions={{ headerShown: false }}
      >
        {user ? (
          <>
            <Stack.Screen name="AppHome" component={MainAppTabs} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            
          </>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  )
}
