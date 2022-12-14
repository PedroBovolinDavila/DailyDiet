import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Tag } from "../components/Tag";
import { MealContainer, MealContent, MealDescription, MealHour, MealHourTitle, MealTitle, MealButtonsContainer } from "../styles/screens/mealStyles";
import PencilSvg from '../assets/pencil.svg'
import TrashSvg from '../assets/trash.svg'
import { Modal } from "../components/Modal";
import { useState } from "react";

export function Meal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <MealContainer>
      <Header title="Refeição" variant="green" />

      <MealContent>
        <MealTitle>
          Sanduíche
        </MealTitle>
        <MealDescription>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </MealDescription>
        <MealHourTitle>
          Data e hora
        </MealHourTitle>
        <MealHour>
          12/12/12 às 20:00
        </MealHour>

        <Tag />

        <MealButtonsContainer>
          <Button 
            text="Editar refeição" 
            Icon={PencilSvg}
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
      />
    </MealContainer>
  )
}