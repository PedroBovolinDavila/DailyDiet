import styled from "styled-components/native";
import ArrowLeftSvg from '../../assets/arrowLeft.svg'

interface HeaderContainerProps {
  variant: 'default' | 'red' | 'green'
}

export const HeaderContainer = styled.View<HeaderContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 60px;

  background-color: ${
    props => props.variant === 'default' 
      ? props.theme.colors.gray300
      : props.variant === 'red' 
        ? props.theme.colors.red300
        : props.theme.colors.green300
  };
`

export const HeaderTitle = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.xl};
  color: ${props => props.theme.colors.gray700};
`

export const BackIcon = styled(ArrowLeftSvg)`
  fill: ${props => props.theme.colors.gray600};
`

export const HeaderBackIcon = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 60px;
`
