import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert } from "react-native";
import { removeMeal } from "../storage/meals/removeMeal";
import { ButtonsContainer, ModalContainer, ModalContent, ModalText } from "../styles/components/modalStyles";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  mealId: string
  date: string
}

export function Modal({ isOpen, setIsOpen, mealId, date }: ModalProps) {
  const navigation = useNavigation()

  function handleCancelModal() {
    setIsOpen(false)
  }

  async function handleRemoveMeal() {
    await removeMeal({
      id: mealId,
      date
    })

    setIsOpen(false)
    Alert.alert('Sucesso!', 'Você removeu uma refeição.')
    navigation.navigate('home')
  }

  return (
    <ModalContainer isOpen={isOpen} onPress={() => setIsOpen(false)}>
      <ModalContent>
        <ModalText>
          Deseja realmente excluir o registro da refeição?
        </ModalText>

        <ButtonsContainer>
          <Button text="Cancelar" onPress={handleCancelModal} outlined isModalButton />
          <Button text="Sim, excluir" onPress={handleRemoveMeal} isModalButton />
        </ButtonsContainer>
      </ModalContent>
    </ModalContainer>
  )
}