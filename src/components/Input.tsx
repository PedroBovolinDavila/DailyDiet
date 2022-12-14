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
  onChangeText,
  keyboardType,
  value
}: InputProps) {
  return (
    <InputContainer twoColumns={twoColumns}>
      <InputTitle>
        {title}
      </InputTitle>

      <TextInput 
        keyboardType={keyboardType} 
        large={large} 
        multiline={large} 
        placeholder={placeholder} 
        onChangeText={onChangeText} 
        value={value}
      />
    </InputContainer>
  )
}