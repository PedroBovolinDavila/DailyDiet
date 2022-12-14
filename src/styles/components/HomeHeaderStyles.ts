import styled from "styled-components/native";  

export const HomeHeaderContainer = styled.View`
  width: 100%;
  padding: 30px 24px 0;
  margin-top: 35px;
  flex-direction: row;
  justify-content: space-between;
`

export const UserAvatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border-width: 2px;
  border-color: ${props => props.theme.colors.gray600};
`