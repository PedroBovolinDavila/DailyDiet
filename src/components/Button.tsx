import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText, PlusIcon } from "../styles/components/buttonStyles";

interface ButtonProps extends TouchableOpacityProps {
  text: string
  showIcon?: boolean
}

export function Button({ text, showIcon = false, ...rest }: ButtonProps) {
  return (
    <ButtonContainer activeOpacity={0.8} {...rest}>
      {showIcon && <PlusIcon />}

      <ButtonText>
        {text}
      </ButtonText>
    </ButtonContainer>
  )
}