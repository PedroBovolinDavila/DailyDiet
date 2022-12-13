import styled from "styled-components/native";

export const HomeContainer = styled.View`
  flex: 1;
`
export const HomeContent = styled.View`
  margin-top: 26px;
  padding: 0 24px;
  flex: 1;
`

export const ListTitle = styled.Text`
  margin-top: 35px;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.lg};
  margin-bottom: 8px;
`

export const SectionTitle = styled.Text`
  margin-top: 32px;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.xl};
`
