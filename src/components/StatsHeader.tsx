import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { BackIcon, Description, Percentage, StatsHeaderBackButton, StatsHeaderContainer } from "../styles/components/statsHeaderStyles";

export function StatsHeader() {
  const theme = useTheme()

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <StatsHeaderContainer>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor={theme.colors.green300}
        translucent
      />

      <StatsHeaderBackButton onPress={handleGoBack} activeOpacity={0.7}>
        <BackIcon />
      </StatsHeaderBackButton>
      <Percentage>
        90,50%
      </Percentage>
      <Description>
        das refeições dentro da dieta
      </Description>
    </StatsHeaderContainer>
  )
}