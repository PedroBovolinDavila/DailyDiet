import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_KEY } from "../config";
import { listMeals } from "./listMeals";

interface UpdateMealProps {
  id: string
  title: string
  description: string
  date: string
  hour: string
  status: 'in' | 'out'
}

export async function updateMeal({ 
  date,
  description,
  hour,
  id,
  status,
  title
}: UpdateMealProps) {
  try {

    const storage = await listMeals()

    if (storage instanceof Error) {
      return new Error('Ocorreu um erro inesperado. Tente novamente.')
    }    

    const searchDate = date.replace('/', '.').replace('/', '.')

    const section = storage.meals.find(section => section.title === searchDate)

    const meal = section?.data.find(meal => meal.id === id)

    let success = storage.success

    if (meal?.status === 'in' && status === 'out') {
      success -= 1
    } 

    if (meal?.status === 'out' && status === 'in') {
      success += 1
    } 
    
    if (!section) {
      return
    }

    Object.assign(meal!, {
      date,
      description,
      hour,
      status,
      title
    })

    const mealIndex = section?.data.findIndex(meal => meal.id === id)    

    if (mealIndex === undefined) {
      return
    }

    const sectionIndex = storage.meals.findIndex(section => section.title === searchDate)

    if (sectionIndex === undefined) {
      return
    }

    storage.meals[sectionIndex] = section

    await AsyncStorage.setItem(MEALS_KEY, JSON.stringify({
      total: storage.total,
      sequence: storage.sequence,
      success,
      meals: storage.meals
    }))

  } catch (err) {
    return new Error('Ocorreu um erro inesperado. Tente novamente.')
  }
}