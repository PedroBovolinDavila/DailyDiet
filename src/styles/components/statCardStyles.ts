import styled from "styled-components/native";

export const StatCardContainer = styled.View`
  padding: 16px;
  background-color: ${props => props.theme.colors.gray200};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 12px;
`

export const Value = styled.Text`
 font-family: ${props => props.theme.fonts.bold};
  font-weight: bold;
  font-size: ${props => props.theme.sizes["2xl"]};
  color: ${props => props.theme.colors.gray700};
  margin-bottom: 2px;
`

export const Description = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.md};
  color: ${props => props.theme.colors.gray600};
`
