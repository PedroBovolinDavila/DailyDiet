import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { PercentCardBackButton, Description, Icon, Percentage, PercentCardContainer } from "../styles/components/percentCardStyles";

export function PercentCard() {
  const navigation = useNavigation()

  function handleOpenStatsScreen() {
    navigation.navigate('stats')
  }

  return (
    <PercentCardContainer>
      <PercentCardBackButton activeOpacity={0.7} onPress={handleOpenStatsScreen}>
        <Icon />
      </PercentCardBackButton>
      <Percentage>
        90,86%
      </Percentage>
      <Description>
        das refeições dentro da dieta
      </Description>
    </PercentCardContainer>
  )
}