import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { colors } = useTheme()

  const theme = DefaultTheme

  theme.colors.background = colors.white

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  )
}