import styled from "styled-components/native";

export const FeedbackContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const FeedbackTitle = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes["2xl"]};
  color: ${props => props.theme.colors.green700};
  margin-bottom: 8px;
`

export const FeedbackDescription = styled.Text`
  font-size: ${props => props.theme.sizes.md};
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.gray700};
`

export const Bold = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
`

export const FeedbackImage = styled.Image`
  margin: 30px 0;
`

