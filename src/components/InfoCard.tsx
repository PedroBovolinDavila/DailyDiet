import { InfoCardContainer, InfoCardDescription, InfoCardValue } from "../styles/components/infoCardStyles";

interface InfoCardProps {
  value: string
  description: string
  variant: 'green' | 'red'
}

export function InfoCard({ value, description, variant }: InfoCardProps) {
  return (
    <InfoCardContainer variant={variant}>
      <InfoCardValue>
        {value}
      </InfoCardValue>
      <InfoCardDescription>
        {description}
      </InfoCardDescription>
    </InfoCardContainer>
  )
}