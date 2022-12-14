import styled from "styled-components/native";

export const EditMealContainer = styled.ScrollView`
  flex: 1;
`
export const EditMealContent = styled.View`
  margin-top: -30px;
  background-color: ${props => props.theme.colors.white};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 35px 24px;
  flex: 1;
  align-items: center;
`

export const DateInputsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const SelectInputsTitle = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.md};
  margin-bottom: 8px;
  width: 100%;
`

export const SelectInputsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`
