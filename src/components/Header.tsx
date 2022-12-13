import { StatusBar } from "react-native"
import { useTheme } from "styled-components/native"
import { BackIcon, HeaderContainer, HeaderTitle } from "../styles/components/headerStyles"

interface HeaderProps {
  title: string
  variant?: 'default' | 'red' | 'green'
}

export function Header({ title, variant = 'default' }: HeaderProps) {
  const theme = useTheme()

  return (
    <HeaderContainer variant={variant}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor={
          variant === 'default' 
            ? theme.colors.gray300
            : variant === 'red' 
              ? theme.colors.red300
              : theme.colors.green300
        }
      />

      <BackIcon />
      <HeaderTitle>
        {title}
      </HeaderTitle>
    </HeaderContainer> 
  )
}