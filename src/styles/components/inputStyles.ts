import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const TWO_COLUMNS_INPUT_SIZE = `${(Dimensions.get('screen').width / 2) - 36}px` // 36 = 24 padding + 12 gap

interface InputContainerProps {
  twoColumns: boolean
}

export const InputContainer = styled.View<InputContainerProps>`
  width: ${props => props.twoColumns ? TWO_COLUMNS_INPUT_SIZE : '100%'};
  margin-bottom: 24px;
`

export const InputTitle = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.md};
  margin-bottom: 4px;
`

interface TextInputProps {
  large: boolean
}


export const TextInput = styled.TextInput.attrs(props => ({
  cursorColor: props.theme.colors.gray400,
  textAlignVertical: 'top'
}))<TextInputProps>`
  border-width: 1px;
  border-color: ${props => props.theme.colors.gray300};
  padding: 14px;
  border-radius: 6px;
  height: ${
    props => props.large 
      ? 148
      : 48
  }px;
`

