import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { SectionList, StatusBar, Text } from "react-native";
import { Button } from "../components/Button";
import { HomeHeader } from "../components/HomeHeader";
import { MealCard } from "../components/MealCard";
import { PercentCard } from "../components/PercentCard";
import { listMeals, Meal } from "../storage/meals/listMeals";
import { HomeContainer, HomeContent, ListTitle, SectionTitle } from "../styles/screens/homeStyles";
import { calculatePercentage } from "../utils/calculatePercentage";

interface Stats {
  percentage: string
  total: number
  success: number
  sequence: number
}

export function Home() { 
  const [meals, setMeals] = useState<Meal[]>([])
  const [stats, setStats] = useState<Stats>()

  const navigation = useNavigation()

  function handleNewMeal() {
    navigation.navigate('newMeal')
  }

  useFocusEffect(useCallback(() => {
    async function fetchData() {
      const data = await listMeals()           

      if (data instanceof Error) {
        return
      }      

      setMeals(data.meals ? data.meals : [])
      setStats({
        percentage: calculatePercentage({ 
          total: data.total,
          part: data.success
        }),
        total: data.total,
        sequence: data.sequence,
        success: data.success
      })
    }

    fetchData()
  }, []))

  return (
    <HomeContainer>      
      <HomeHeader />

      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      
      <HomeContent>
        <PercentCard stats={stats!} />

        <ListTitle>
          Refeições
        </ListTitle>
        <Button text="Nova refeição" onPress={handleNewMeal} showIcon />

        <SectionList 
          sections={meals}
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}

          renderSectionHeader={({ section }) => (
            <SectionTitle>{section.title}</SectionTitle>
          )}

          renderItem={({ item, section }) => (
            <MealCard meal={item} date={section.title} />
          )}
          
          contentContainerStyle={{
            paddingBottom: 50
          }}
        />
      </HomeContent>
    </HomeContainer>
  )
}