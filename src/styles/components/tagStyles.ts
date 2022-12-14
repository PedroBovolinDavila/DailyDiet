import styled from "styled-components/native";

export const TagContainer = styled.View`
  background-color: ${props => props.theme.colors.gray200};
  align-items:center;
  justify-content: center;
  flex-direction: row;
  padding: 8px 16px;
  border-radius: 10000px;
`

export const TagTitle = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.md};
  color: ${props => props.theme.colors.gray700};
`

interface TagStatusProps {
  status: 'in' | 'out'
}

export const TagStatus = styled.View<TagStatusProps>`
  border-radius: 4px;
  width: 8px;
  margin-right: 8px;
  height: 8px;
  background-color: ${
    props => props.status === 'in'
      ? props.theme.colors.green700
      : props.theme.colors.red700
  };
`
