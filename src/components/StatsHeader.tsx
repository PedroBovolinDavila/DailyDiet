import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { BackIcon, Description, Percentage, StatsHeaderContainer } from "../styles/components/statsHeaderStyles";

export function StatsHeader() {
  const theme = useTheme()

  return (
    <StatsHeaderContainer>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor={theme.colors.green300}
        translucent
      />

      <BackIcon />
      <Percentage>
        90,50%
      </Percentage>
      <Description>
        das refeições dentro da dieta
      </Description>
    </StatsHeaderContainer>
  )
}