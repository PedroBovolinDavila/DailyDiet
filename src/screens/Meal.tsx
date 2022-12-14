import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Tag } from "../components/Tag";
import { MealContainer, MealContent, MealDescription, MealHour, MealHourTitle, MealTitle, MealButtonsContainer } from "../styles/screens/mealStyles";
import PencilSvg from '../assets/pencil.svg'
import TrashSvg from '../assets/trash.svg'
import { Modal } from "../components/Modal";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { getMealById, Meal as MealType } from "../storage/meals/getMealById";
import { Alert } from "react-native";

interface RouteParamsProps {
  params: {
    mealId: string
    date: string
  }
}

export function Meal() {
  const [meal, setMeal] = useState<MealType>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigation = useNavigation()

  const { params } = useRoute() as RouteParamsProps

  const date = params.date.replace('.', '/').replace('.', '/')

  function handleOpenEditMealScreen() {
    navigation.navigate('editMeal', params)
  }

  useFocusEffect(useCallback(() => {
    async function fetchData() {
      const item = await getMealById(params.mealId)

      if (item instanceof Error) {
        return Alert.alert('Erro', item.message)
      }

      setMeal(item)
    }

    fetchData()
  }, []))

  return (
    <MealContainer>
      <Header 
        title="Refeição" 
        variant={meal?.status === 'in' ? 'green' : 'red'} 
      />

      <MealContent>
        <MealTitle>
          {meal?.title}
        </MealTitle>
        <MealDescription>
          {meal?.description}
        </MealDescription>
        <MealHourTitle>
          Data e hora
        </MealHourTitle>
        <MealHour>
          {date} às {meal?.hour}
        </MealHour>

        
        <Tag status={meal?.status!} />

        <MealButtonsContainer>
          <Button 
            text="Editar refeição" 
            Icon={PencilSvg}
            onPress={handleOpenEditMealScreen}
            showIcon
          />
          <Button 
            text="Excluir refeição"
            Icon={TrashSvg}
            onPress={() => setIsModalOpen(true)}
            style={{ marginTop: 8 }}
            outlined
            showIcon
          />
        </MealButtonsContainer>
      </MealContent>

      <Modal  
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        mealId={meal?.id!}
        date={params.date}
      />
    </MealContainer>
  )
}