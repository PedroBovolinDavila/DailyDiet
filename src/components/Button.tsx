import React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { ButtonContainer, ButtonText } from "../styles/components/buttonStyles";

interface ButtonProps extends TouchableOpacityProps {
  text: string
  showIcon?: boolean
  small?: boolean
  Icon?: React.FC<SvgProps>
  outlined?: boolean
}

export function Button({ 
  text, 
  showIcon = false, 
  small = false, 
  Icon,
  outlined = false,
  ...rest 
}: ButtonProps) {
  return (
    <ButtonContainer activeOpacity={0.8} small={small} outlined={outlined} {...rest}>
      {(showIcon && Icon) && <Icon style={{ marginRight: 12 }} />}

      <ButtonText outlined={outlined}>
        {text}
      </ButtonText>
    </ButtonContainer>
  )
}