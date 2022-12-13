import { InfoCard } from "../components/InfoCard";
import { StatCard } from "../components/StatCard";
import { StatsHeader } from "../components/StatsHeader";
import { InfoCardContainer, StatsContainer, StatsContent, StatsTitle } from "../styles/screens/statsStyles";

export function Stats() {
  return (
    <StatsContainer>
      <StatsHeader />

      <StatsContent>
        <StatsTitle>
          Estatísticas gerais
        </StatsTitle>

        <StatCard 
          value="22" 
          description="melhor sequência de pratos na dieta" 
        />
        <StatCard 
          value="109" 
          description="refeições registradas" 
        />

        <InfoCardContainer>
          <InfoCard 
            value="99"
            description="refeições dentro da dieta"
            variant="green"
          />
          <InfoCard 
            value="10"
            description="refeições fora da dieta"
            variant="red"
          />
        </InfoCardContainer>
      </StatsContent>
    </StatsContainer>
  )
}