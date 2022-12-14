import styled from "styled-components/native";

export const MealCardContainer = styled.Pressable`
  width: 100%;
  flex-direction: row;
  padding: 14px 16px 12px;
  border-width: 1px;
  margin-top: 8px;
  border-radius: 6px;
  border-color: ${props => props.theme.colors.gray300};
  align-items: center;
`

export const Hour = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.sm};
  border-right-width: 1px;
  border-right-color: ${props => props.theme.colors.gray400};
  padding-right: 12px;
`

export const Meal = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.lg};
  padding-left: 12px;
  flex: 1;
` 

interface StatusProps {
  status: 'in' | 'out'
}

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  margin-left: 12px;
  border-radius: 7px;
  background-color: ${
    props => props.status === 'out' 
      ? props.theme.colors.red500
      : props.theme.colors.green500
  };
`
