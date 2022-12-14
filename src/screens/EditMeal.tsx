import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { DateInputsContainer, EditMealContainer, EditMealContent, SelectInputsContainer, SelectInputsTitle } from "../styles/screens/editMealStyles";

export function EditMeal() {
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
    <EditMealContainer>
      <Header title="Editar refeição" />

      <EditMealContent>
        <Input title="Nome" />
        <Input title="Descrição" large />

        <DateInputsContainer>
          <Input 
            title="Data" 
            placeholder="XX/XX/XX"
            twoColumns 
          />
          <Input 
            title="Hora" 
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

        <Button text="Salvar alterações" onPress={handleCreateMeal} />
      </EditMealContent>
    </EditMealContainer>
  )
}