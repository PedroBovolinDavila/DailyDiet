import { listMeals } from "./listMeals"

export interface Meal {
  id: string
  description: string
  hour: string
  status: 'in' | 'out'
  title: string
}

export async function getMealById(id: string) {
  try {

    const storage = await listMeals()

    if (storage instanceof Error) {
      return new Error('Ocorreu um erro inesperado. Tente novamente.')
    }

    let meals: Meal[] = [];

    for (let i = 0; i < storage.meals.length; i++) {
      meals = [...meals, ...(storage.meals[i].data)]
    } 
    
    const meal = meals.find(meal => meal.id === id)

    return meal

  } catch (err) {
    return new Error('Ocorreu um erro inesperado. Tente novamente.')
  }
}