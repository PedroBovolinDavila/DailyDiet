import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { DateInputsContainer, NewMealContainer, NewMealContent, SelectInputsContainer, SelectInputsTitle } from "../styles/screens/newMealStyles";

export function NewMeal() {
  const [status, setStatus] = useState('in')

  const navigation = useNavigation()

  function handleCreateMeal() {
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
        <Input title="Nome" />
        <Input title="Descrição" large />

        <DateInputsContainer>
          <Input title="Data" twoColumns />
          <Input title="Hora" twoColumns />
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