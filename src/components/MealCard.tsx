import { useNavigation } from "@react-navigation/native"
import { Hour, Meal, MealCardContainer, Status } from "../styles/components/mealCardStyles"

interface MealCardProps {
  meal: {
    hour: string
    title: string
    status: 'out' | 'in'
  }
}

export function MealCard({ meal }: MealCardProps) {
  const navigation = useNavigation()

  function handleOpenMealScreen() {
    navigation.navigate('meal')
  }

  return (
    <MealCardContainer onPress={handleOpenMealScreen}>
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