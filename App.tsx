import { ActivityIndicator, StatusBar, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { useFonts } from "expo-font";
import { NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { ThemeProvider } from "styled-components/native";
import THEME from './src/styles/theme';

import { Home } from "./src/screens/Home";
import { Stats } from "./src/screens/Stats";
import { NewMeal } from "./src/screens/NewMeal";
import { PositiveFeedback } from "./src/screens/feedback/Positive";
import { NegativeFeedback } from "./src/screens/feedback/Negative";
import { Meal } from "./src/screens/Meal";

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
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Meal />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}