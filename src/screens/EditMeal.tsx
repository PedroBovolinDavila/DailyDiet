import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { updateMeal } from "../storage/meals/editMeal";
import { getMealById } from "../storage/meals/getMealById";
import { DateInputsContainer, EditMealContainer, EditMealContent, SelectInputsContainer, SelectInputsTitle } from "../styles/screens/editMealStyles";

interface RouteParamsProps {
  params: {
    mealId: string
    date: string
  }
}

type Status = 'in' | 'out'

export function EditMeal() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [hour, setHour] = useState('')
  const [date, setDate] = useState('')
  const [status, setStatus] = useState<Status>('in')

  const { params } = useRoute() as RouteParamsProps
  const paramsDate = params.date.replace('.', '/').replace('.', '/')

  const navigation = useNavigation()

  async function handleUpdateMeal() {
    const dateRegex = /^\d{2}\/\d{2}\/\d{2}$/ ;
    const hourRegex = /^\d{2}\:\d{2}$/; 

    const isDateValid = dateRegex.test(date)
    const isHourValid = hourRegex.test(hour)

    if (!isDateValid) {
      return Alert.alert(
        'Informe uma data valida!', 
        'Informe uma data no seguinte formato: dia (2 digitos) / mês (2 digitos) / ano (2 digitos).'
      )
    }

    if (!isHourValid) {
      return Alert.alert(
        'Informe um horario valido!', 
        'Informe uma data no seguinte formato: horas (2 digitos) : minutos (2 digitos)'
      )
    }

    if (!status.trim() || !title.trim() || !description.trim() || !hour.trim() || !date.trim()) {
      return Alert.alert('Informe todos os valores!', 'Informe todos os valores para poder cadastrar uma nova refeição.')
    }

    await updateMeal({
      date,
      description,
      hour,
      id: params.mealId,
      status,
      title,
    })

    Alert.alert('Sucesso!', 'Você atualizou uma refeição da sua dieta.')
    navigation.navigate('home')
  }

  useFocusEffect(useCallback(() => {
    async function fetchData() {
      const meal = await getMealById(params.mealId)

      if (meal instanceof Error) {
        return Alert.alert('Error', meal.message)
      }

      setTitle(meal?.title!)
      setDescription(meal?.description!)
      setHour(meal?.hour!)
      setStatus(meal?.status!)
      setDate(paramsDate)
    }

    fetchData()
  }, []))

  return (
    <EditMealContainer>
      <Header title="Editar refeição" />

      <EditMealContent>
        <Input title="Nome" value={title} onChangeText={setTitle} />
        <Input title="Descrição" value={description} onChangeText={setDescription} large />

        <DateInputsContainer>
          <Input 
            title="Data" 
            value={date}
            onChangeText={setDate}
            placeholder="XX/XX/XX"
            twoColumns 
          />
          <Input 
            title="Hora" 
            value={hour}
            onChangeText={setHour}
            placeholder="XX:XX"
            twoColumns 
          />
        </DateInputsContainer>

        <SelectInputsTitle>
          Está dentro da dieta?
        </SelectInputsTitle>
        <SelectInputsContainer>
          <Select 
            title="Sim" 
            isSelected={status === 'in'} 
            variant="green" 
            onPress={() => setStatus('in')}
          />
          <Select 
            title="Não" 
            isSelected={status === 'out'} 
            variant="red" 
            onPress={() => setStatus('out')}
          />
        </SelectInputsContainer>

        <Button text="Salvar alterações" onPress={handleUpdateMeal} />
      </EditMealContent>
    </EditMealContainer>
  )
}