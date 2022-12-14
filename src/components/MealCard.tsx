import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import { useCallback } from "react"
import { Hour, Meal, MealCardContainer, Status } from "../styles/components/mealCardStyles"

interface MealCardProps {
  meal: {
    id: string
    hour: string
    title: string
    status: 'out' | 'in'
  }
  date: string
}

export function MealCard({ meal, date }: MealCardProps) {
  const navigation = useNavigation()

  function handleOpenMealScreen() {
    navigation.navigate('meal', {
      mealId: meal.id,
      date
    })
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