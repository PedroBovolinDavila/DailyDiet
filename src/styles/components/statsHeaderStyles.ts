import styled from "styled-components/native";
import ArrowLeftSvg from '../../assets/arrowLeft.svg'

interface StatsHeaderContainerProps {
  isNegative: boolean
}

export const StatsHeaderContainer = styled.View<StatsHeaderContainerProps>`
  background-color: ${
    props => props.isNegative 
      ? props.theme.colors.red300
      : props.theme.colors.green300
  };
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 65px 0;
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

interface BackIconProps {
  variant: 'red' | 'green'
}

export const BackIcon = styled(ArrowLeftSvg)<BackIconProps>`
  fill: ${
    props => props.variant === 'red'
      ? props.theme.colors.red700
      : props.theme.colors.green700
  };
`

export const StatsHeaderBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 55px;
  left: 24px;
`
