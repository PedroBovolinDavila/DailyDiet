import styled from "styled-components/native";
import ArrowLeftSvg from '../../assets/arrowLeft.svg'

export const StatsHeaderContainer = styled.View`
  background-color: ${props => props.theme.colors.green300};
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 40px;
  padding-bottom: 64px;
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

export const BackIcon = styled(ArrowLeftSvg)`
  position: absolute;
  top: 25px;
  left: 24px;
`
