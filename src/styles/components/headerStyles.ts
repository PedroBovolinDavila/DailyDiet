import styled from "styled-components/native";
import ArrowLeftSvg from '../../assets/arrowLeft.svg'

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.gray300};
  position: relative;
  padding: 30px 0 60px;
`

export const HeaderTitle = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.xl};
  color: ${props => props.theme.colors.gray700};
`

export const BackIcon = styled(ArrowLeftSvg)`
  fill: ${props => props.theme.colors.gray600};
  position: absolute;
  left: 24px;
  top: 30px;
`
