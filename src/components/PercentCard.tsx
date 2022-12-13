import { Description, Icon, Percentage, PercentCardContainer } from "../styles/components/percentCardStyles";

export function PercentCard() {
  return (
    <PercentCardContainer>
      <Icon />
      <Percentage>
        90,86%
      </Percentage>
      <Description>
        das refeições dentro da dieta
      </Description>
    </PercentCardContainer>
  )
}