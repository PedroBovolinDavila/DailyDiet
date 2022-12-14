import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_KEY } from "../config";
import { listMeals } from "./listMeals";

interface RemoveMealProps {
  id: string
  date: string
}

export async function removeMeal({ id, date }: RemoveMealProps) {
  try {

    const storage = await listMeals()

    if (storage instanceof Error) {
      return new Error('Ocorreu um erro inesperado. Tente novamente.')
    }    

    const section = storage.meals.find(section => section.title === date)

    const meal = section?.data.find(meal => meal.id === id)
    const newSectionData = section?.data.filter(meal => meal.id !== id)
    let newStorage;

    if (newSectionData?.length === 0) {
      const newMeals = storage.meals.filter(section => section.title !== date)      

      newStorage = {
        sequence: storage.sequence,
        success: meal?.status === 'in' ? storage.success - 1 : storage.success,
        total: storage.total - 1,
        meals: newMeals
      }
    } else {
      const sectionIndex = storage.meals.findIndex(section => section.title === date)

      storage.meals[sectionIndex].data = newSectionData!

      newStorage = {
        sequence: storage.sequence,
        success: meal?.status === 'in' ? storage.success - 1 : storage.success,
        total: storage.total - 1,
        meals: storage.meals
      } 

    }
    
    await AsyncStorage.setItem(MEALS_KEY, JSON.stringify(newStorage))      
  } catch (err) {
    return new Error('Ocorreu um erro inesperado. Tente novamente.')
  }
}