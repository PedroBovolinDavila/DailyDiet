import styled from "styled-components/native";
import ArrowUpSvg from '../../assets/arrowUp.svg'

export const PercentCardContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.green300};
  border-radius: 8px;
  padding: 20px 16px;
  position: relative;
`

export const Percentage = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-weight: bold;
  font-size: ${props => props.theme.sizes["3xl"]};
  color: ${props => props.theme.colors.gray700};
  margin-bottom: 2px;
`

export const Description = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.md};
  color: ${props => props.theme.colors.gray600};
`

export const Icon = styled(ArrowUpSvg)``

export const PercentCardBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
`
