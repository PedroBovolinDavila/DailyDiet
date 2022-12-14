import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import { MEALS_KEY } from '../config'
import { listMeals } from './listMeals'

interface CreateMealProps {
  date: string
  hour: string
  description: string
  title: string
  status: 'in' | 'out'
}

export async function createMeal({
  date,
  hour,
  title,
  status,
  description
}: CreateMealProps) {
  try {

    const dateSectionTitle = date
      .replace('/', '.')
      .replace('/', '.')

    const prevStorage = await listMeals()

    if (prevStorage instanceof Error) {
      console.log(prevStorage.message);
      
      return new Error(prevStorage.message)
    }
    
    let selectedSection = prevStorage.meals?.find(meal => meal.title === dateSectionTitle)

    if (!selectedSection) {
      selectedSection = {
        title: dateSectionTitle,
        data: []
      }
    } 
    
    selectedSection.data.unshift(
      {
        id: String(uuid.v4()),
        hour,
        status,
        description,
        title
      }
    )
    
    const successSequence = status === 'in' ? prevStorage.sequence += 1 : 0
    const newStorage = prevStorage.meals 
      ? prevStorage.meals.filter(meal => meal.title !== selectedSection?.title)
      : []

    await AsyncStorage.setItem(MEALS_KEY, JSON.stringify({
      sequence: successSequence,
      meals: [
        selectedSection,
        ...newStorage
      ]
    }))

  } catch (err) {
    console.log('Err', err);
    
    return new Error('Ocorreu um erro inesperado. Tente novamente.')
  }
}