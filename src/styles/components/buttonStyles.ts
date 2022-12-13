import styled from "styled-components/native";
import PlusSvg from '../../assets/plus.svg'

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  background-color: ${props => props.theme.colors.gray600};
  border-radius: 6px;
  flex-direction: row;
`

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.md};
`

export const PlusIcon = styled(PlusSvg)`
  margin-right: 12px;
`
