import { HomeHeaderContainer, UserAvatar } from "../styles/components/HomeHeaderStyles";

import Logo from '../assets/logo.svg'

export function HomeHeader() {
  return (
    <HomeHeaderContainer>
      <Logo />

      <UserAvatar source={{ uri: 'https://github.com/pedrobovolindavila.png' }} />
    </HomeHeaderContainer>
  )
}