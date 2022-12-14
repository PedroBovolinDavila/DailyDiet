import React from "react";
import { ButtonsContainer, ModalContainer, ModalContent, ModalText } from "../styles/components/modalStyles";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export function Modal({ isOpen, setIsOpen }: ModalProps) {
  function handleCancelModal() {
    setIsOpen(false)
  }

  function handleRemoveMeal() {
    setIsOpen(false)
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