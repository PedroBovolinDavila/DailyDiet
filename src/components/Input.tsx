import { TextInputProps } from "react-native";
import { InputContainer, InputTitle, TextInput } from "../styles/components/inputStyles";

interface InputProps extends TextInputProps {
  title: string
  large?: boolean
  twoColumns?: boolean
}

export function Input({ 
  title, 
  large = false,
  twoColumns = false,
  placeholder,
  onChangeText
}: InputProps) {
  return (
    <InputContainer twoColumns={twoColumns}>
      <InputTitle>
        {title}
      </InputTitle>

      <TextInput large={large} multiline={large} placeholder={placeholder} onChangeText={onChangeText} />
    </InputContainer>
  )
}