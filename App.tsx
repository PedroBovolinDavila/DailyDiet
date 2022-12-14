import { ActivityIndicator, View, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { useFonts } from "expo-font";
import { NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { ThemeProvider } from "styled-components/native";
import THEME from './src/styles/theme';
import { Routes } from "./src/routes";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular, 
    NunitoSans_700Bold 
  })

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="black" />
      </View>
    )
  }


  return (
    <ThemeProvider theme={THEME}>
      <SafeAreaProvider>
        {/* <SafeAreaView style={{ flex: 1 }}> */}
          <Routes />
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    </ThemeProvider>
  )
}