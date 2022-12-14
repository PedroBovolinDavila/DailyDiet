import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import PlusSvg from '../../assets/plus.svg'

interface ButtonContainerProps {
  small: boolean
  outlined: boolean
  isModalButton: boolean
}

// 12 gap => 6 px
// 24 * 2 padding => 48 px

const MODAL_BUTTON_SIZE = (Dimensions.get('screen').width / 2) - 54

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  background-color: ${
    props => props.outlined 
      ? 'transparent'
      : props.theme.colors.gray600
  };
  border-radius: 6px;
  flex-direction: row;

  ${props => props.outlined && css`
    border-width: 1px;
    border-color: ${props.theme.colors.gray700};
  `};
  ${props => !props.small && css`
    width: 100%;
  `};
  ${props => props.isModalButton && css`
    width: ${MODAL_BUTTON_SIZE}px;
  `}
`

interface ButtonTextProps {
  outlined: boolean
}

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${
    props => props.outlined 
      ? props.theme.colors.gray700
      : props.theme.colors.white
  };
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.md};
`
