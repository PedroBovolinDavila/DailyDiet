import { useRoute } from "@react-navigation/native";
import { InfoCard } from "../components/InfoCard";
import { StatCard } from "../components/StatCard";
import { StatsHeader } from "../components/StatsHeader";
import { InfoCardContainer, StatsContainer, StatsContent, StatsTitle } from "../styles/screens/statsStyles";

interface RouteParamsProps {
  params: {
    percentage: string
    sequence: number
    total: number
    success: number
    fails: number
  }
}

export function Stats() {
  const { params } = useRoute() as RouteParamsProps

  return (
    <StatsContainer>
      <StatsHeader isNegative={params.fails > params.success} percentage={params.percentage} />

      <StatsContent>
        <StatsTitle>
          Estatísticas gerais
        </StatsTitle>

        <StatCard 
          value={params.sequence}
          description="melhor sequência de pratos na dieta" 
        />
        <StatCard 
          value={params.total} 
          description="refeições registradas" 
        />

        <InfoCardContainer>
          <InfoCard 
            value={params.success}
            description="refeições dentro da dieta"
            variant="green"
          />
          <InfoCard 
            value={params.fails}
            description="refeições fora da dieta"
            variant="red"
          />
        </InfoCardContainer>
      </StatsContent>
    </StatsContainer>
  )
}