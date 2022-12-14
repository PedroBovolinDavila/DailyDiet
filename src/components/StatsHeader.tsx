import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { BackIcon, Description, Percentage, StatsHeaderBackButton, StatsHeaderContainer } from "../styles/components/statsHeaderStyles";

interface StatsHeaderProps {
  percentage: string
  isNegative: boolean
}

export function StatsHeader({ percentage, isNegative }: StatsHeaderProps) {
  const theme = useTheme()

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <StatsHeaderContainer isNegative={isNegative}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor={isNegative ? theme.colors.red300 : theme.colors.green300}
        translucent
      />

      <StatsHeaderBackButton onPress={handleGoBack} activeOpacity={0.7}>
        <BackIcon variant={isNegative ? 'red' : 'green'} />
      </StatsHeaderBackButton>
      <Percentage>
        {percentage}%
      </Percentage>
      <Description>
        das refeições dentro da dieta
      </Description>
    </StatsHeaderContainer>
  )
}