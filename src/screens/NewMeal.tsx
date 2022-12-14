import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { createMeal } from "../storage/meals/createMeal";
import { DateInputsContainer, NewMealContainer, NewMealContent, SelectInputsContainer, SelectInputsTitle } from "../styles/screens/newMealStyles";

type Status = 'in' | 'out'

export function NewMeal() {
  const [status, setStatus] = useState<Status>('in')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [hour, setHour] = useState('')
  const [date, setDate] = useState('')

  const navigation = useNavigation()

  async function handleCreateMeal() {
    if (!status.trim() || !title.trim() || !description.trim() || !hour.trim() || !date.trim()) {
      return Alert.alert('Informe todos os valores!', 'Informe todos os valores para poder cadastrar uma nova refeição.')
    }

    await createMeal({
      date,
      hour,
      status,
      description,
      title
    })

    if (status === 'in') {
      navigation.navigate('positiveFeedback')
    } else {
      navigation.navigate('negativeFeedback')
    }
  }

  return (
    <NewMealContainer>
      <Header title="Nova refeição" />

      <NewMealContent>
        <Input title="Nome" onChangeText={setTitle} />
        <Input title="Descrição" onChangeText={setDescription} large />

        <DateInputsContainer>
          <Input 
            title="Data" 
            placeholder="XX/XX/XX"
            onChangeText={setDate}
            twoColumns 
          />
          <Input 
            title="Hora" 
            placeholder="XX:XX"
            onChangeText={setHour}
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

        <Button text="Cadastrar refeição" onPress={handleCreateMeal} />
      </NewMealContent>
    </NewMealContainer>
  )
}