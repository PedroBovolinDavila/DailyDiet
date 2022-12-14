export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined 
      newMeal: undefined 
      stats: {
        percentage: string
        sequence: number
        total: number
        success: number
        fails: number
      }
      meal: { mealId: string, date: string }
      positiveFeedback: undefined
      negativeFeedback: undefined
      editMeal:  { mealId: string, date: string }
    }
  }
}