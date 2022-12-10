import { HeaderContainer, UserAvatar } from "../styles/components/headerStyles";

import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Logo />

      <UserAvatar source={{ uri: 'https://github.com/pedrobovolindavila.png' }} />
    </HeaderContainer>
  )
}