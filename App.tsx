import { ActivityIndicator, View } from "react-native";

import { useFonts } from "expo-font";
import { NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { ThemeProvider } from "styled-components/native";
import THEME from './src/theme';

import { Home } from "./src/screens/home";

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
      <Home />
    </ThemeProvider>
  )
}