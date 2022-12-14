import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'styled-components/native'
import { NegativeFeedback } from '../screens/feedback/Negative'
import { PositiveFeedback } from '../screens/feedback/Positive'
import { Home } from '../screens/Home'
import { Meal } from '../screens/Meal'
import { NewMeal } from '../screens/NewMeal'
import { Stats } from '../screens/Stats'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, statusBarStyle: 'dark', statusBarTranslucent: true, statusBarColor: 'transparent' }}>
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="newMeal"
        component={NewMeal}
      />
      <Screen 
        name="stats"
        component={Stats}
      />
      <Screen 
        name="meal"
        component={Meal}
      />
      <Screen 
        name="positiveFeedback"
        component={PositiveFeedback}
      />
      <Screen 
        name="negativeFeedback"
        component={NegativeFeedback}
      />
    </Navigator>
  )
}
