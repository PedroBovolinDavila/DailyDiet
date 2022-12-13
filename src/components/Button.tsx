import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText, PlusIcon } from "../styles/components/buttonStyles";

interface ButtonProps extends TouchableOpacityProps {
  text: string
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <ButtonContainer activeOpacity={0.8} {...rest}>
      <PlusIcon />

      <ButtonText>
        {text}
      </ButtonText>
    </ButtonContainer>
  )
}