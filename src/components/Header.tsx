import { StatusBar } from "react-native"
import { useTheme } from "styled-components/native"
import { BackIcon, HeaderContainer, HeaderTitle } from "../styles/components/headerStyles"

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const theme = useTheme()

  return (
    <HeaderContainer>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor={theme.colors.gray300}
      />

      <BackIcon />
      <HeaderTitle>
        {title}
      </HeaderTitle>
    </HeaderContainer> 
  )
}