import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SectionList, StatusBar, Text } from "react-native";
import { Button } from "../components/Button";
import { HomeHeader } from "../components/HomeHeader";
import { MealCard } from "../components/MealCard";
import { PercentCard } from "../components/PercentCard";
import { HomeContainer, HomeContent, ListTitle, SectionTitle } from "../styles/screens/homeStyles";

interface Meals {
  title: string
  data: {
    hour: string
    title: string
    status: 'out' | 'in'
  }[]
}

export function Home() { 
  const [meals, setMeals] = useState<Meals[]>([
    {
      title: '12.08.22',
      data: [
        {
          hour: '20:00',
          title: 'X-Tudo',
          status: 'out'
        },
        {
          hour: '16:00',
          title: 'Salada',
          status: 'in'
        }
      ]
    },
    {
      title: '16.08.22',
      data: [
        {
          hour: '20:00',
          title: 'X-Tudo',
          status: 'out'
        },
        {
          hour: '16:00',
          title: 'Salada',
          status: 'in'
        },
        {
          hour: '16:00',
          title: '22',
          status: 'in'
        },
        {
          hour: '16:00',
          title: 'aa',
          status: 'in'
        }
      ]
    }
  ])

  const navigation = useNavigation()

  function handleNewMeal() {
    navigation.navigate('newMeal')
  }

  return (
    <HomeContainer>      
      <HomeHeader />

      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      
      <HomeContent>
        <PercentCard />

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

          renderItem={({ item }) => (
            <MealCard meal={item} />
          )}
          
          contentContainerStyle={{
            paddingBottom: 50
          }}
        />
      </HomeContent>
    </HomeContainer>
  )
}