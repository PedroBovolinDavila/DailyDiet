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
  meals: Meal[]
}

export async function listMeals() {
  try {
    
    const storage = await AsyncStorage.getItem(MEALS_KEY)

    const meals: MealsReturn = storage ? JSON.parse(storage) : []

    return meals

  } catch (err) {
    return new Error('Ocorreu um erro inesperado. Tente novamente.')
  }
}