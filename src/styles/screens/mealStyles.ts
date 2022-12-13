import styled from "styled-components/native";

export const MealContainer = styled.View`
  flex: 1;
`
export const MealContent = styled.View`
  margin-top: -30px;
  background-color: ${props => props.theme.colors.white};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 35px 24px;
  flex: 1;
  align-items: flex-start;
`

export const MealTitle = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.gray700};
  font-size: 20px;
  width: 100%;
  margin-bottom: 8px;
`

export const MealDescription = styled.Text`
  width: 100%;
  font-size: ${props => props.theme.sizes.lg};
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.gray600};
`

export const MealHourTitle = styled.Text`
  margin: 24px 0 8px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.gray700};
  font-size: ${props => props.theme.sizes.md};
  width: 100%;
`

export const MealHour = styled.Text`
  width: 100%;
  font-size: ${props => props.theme.sizes.lg};
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.gray600};
  margin-bottom: 24px;
`

export const MealButtonsContainer = styled.View`
  width: 100%;
  margin-top: auto;

`

