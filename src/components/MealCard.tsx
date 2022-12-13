import { Hour, Meal, MealCardContainer, Status } from "../styles/components/mealCardStyles"

interface MealCardProps {
  meal: {
    hour: string
    title: string
    status: 'out' | 'in'
  }
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <MealCardContainer>
      <Hour>
        {meal.hour}
      </Hour>
      <Meal numberOfLines={1}>
        {meal.title}
      </Meal>
      <Status status={meal.status} />
    </MealCardContainer>
  )
}