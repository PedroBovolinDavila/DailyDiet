import { InputContainer, InputTitle, TextInput } from "../styles/components/inputStyles";

interface InputProps {
  title: string
  large?: boolean
  twoColumns?: boolean
}

export function Input({ 
  title, 
  large = false,
  twoColumns = false 
}: InputProps) {
  return (
    <InputContainer twoColumns={twoColumns}>
      <InputTitle>
        {title}
      </InputTitle>

      <TextInput large={large} multiline={large} />
    </InputContainer>
  )
}