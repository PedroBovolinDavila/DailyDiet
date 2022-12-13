import { Dimensions } from "react-native";
import styled from "styled-components/native";

const SAFE_DEVICE_WIDTH = (Dimensions.get('screen').width / 2) - 30 // 36 = 24 padding + 6 gap

interface InfoCardContainerProps {
  variant: 'green' | 'red'
}

export const InfoCardContainer = styled.View<InfoCardContainerProps>`
  width: ${SAFE_DEVICE_WIDTH}px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${
    props => props.variant === 'green' 
      ? props.theme.colors.green300 
      : props.theme.colors.red300
  };
`

export const InfoCardValue = styled.Text`
 font-family: ${props => props.theme.fonts.bold};
  font-weight: bold;
  font-size: ${props => props.theme.sizes["2xl"]};
  color: ${props => props.theme.colors.gray700};
  margin-bottom: 2px;
`

export const InfoCardDescription = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.md};
  color: ${props => props.theme.colors.gray600};
  text-align: center;
`

