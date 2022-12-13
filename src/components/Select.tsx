import { SelectContainer, SelectTitle, Status } from "../styles/components/selectStyles";

interface SelectProps {
  title: string
  variant: 'red' | 'green'
  isSelected: boolean
  onPress: () => void
}

export function Select({ title, variant, isSelected, onPress }: SelectProps) {
  return (
    <SelectContainer 
      variant={variant} 
      isSelected={isSelected} 
      activeOpacity={.7}
      onPress={onPress}
    >
      <Status variant={variant} />

      <SelectTitle>
        {title}
      </SelectTitle>
    </SelectContainer>
  )
}