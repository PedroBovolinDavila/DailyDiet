import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_KEY } from "../config"

export interface Meal {
  title: string
  data: {
    id: string
    hour: string
    description: string
    title: string
    status: 'in' | 'out'
  }[]
}

interface MealsReturn {
  sequence: number
  total: number
  success: number
  meals: Meal[]
}

export async function listMeals() {
  try {
    
    const storage = await AsyncStorage.getItem(MEALS_KEY)

    const meals: MealsReturn = storage ? JSON.parse(storage) : []

    if (!meals.sequence) {
      meals.sequence = 0
    } 
    if (!meals.success) {
      meals.success = 0
    } 
    if (!meals.total) {
      meals.total = 0
    }

    return meals

  } catch (err) {
    return new Error('Ocorreu um erro inesperado. Tente novamente.')
  }
}