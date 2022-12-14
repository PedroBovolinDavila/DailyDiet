import { Description, StatCardContainer, Value } from "../styles/components/statCardStyles";

interface StatCardProps {
  value: number
  description: string
}

export function StatCard({ value, description }: StatCardProps) {
  return (
    <StatCardContainer>
      <Value>
        {value}
      </Value>
      <Description>
        {description}
      </Description>
    </StatCardContainer>
  )
}