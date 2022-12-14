import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { PercentCardBackButton, Description, Icon, Percentage, PercentCardContainer } from "../styles/components/percentCardStyles";

interface PercentCardProps {
  stats: {
    percentage: string
    total: number
    success: number
    sequence: number
  }
}

export function PercentCard({ stats }: PercentCardProps) {
  const navigation = useNavigation()

  function handleOpenStatsScreen() {
    navigation.navigate('stats', {
      fails: stats.total - stats.success,
      ...stats
    })
  }

  const isNegative = (stats?.total - stats?.success) > stats?.success

  return (
    <PercentCardContainer isNegative={isNegative}>
      <PercentCardBackButton activeOpacity={0.7} onPress={handleOpenStatsScreen}>
        <Icon variant={isNegative ? 'red' : 'green'} />
      </PercentCardBackButton>
      <Percentage>
        {stats?.percentage}%
      </Percentage>
      <Description>
        das refeições dentro da dieta
      </Description>
    </PercentCardContainer>
  )
}