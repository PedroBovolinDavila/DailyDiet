import styled from "styled-components/native";

interface ModalContainerProps {
  isOpen: boolean
}

export const ModalContainer = styled.Pressable<ModalContainerProps>`
  display: ${
    props => props.isOpen
      ? 'flex'
      : 'none'
  };;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 0 24px;
`

export const ModalContent = styled.View`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  padding: 40px 24px 24px 24px;
  border-radius: 8px;
  z-index: 10;
`

export const ModalText = styled.Text`
  color: ${props => props.theme.colors.gray600};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.xl};
  text-align: center;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`
