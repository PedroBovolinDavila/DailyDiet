import { Dimensions, ProgressViewIOSComponent } from "react-native";
import styled from "styled-components/native";

interface SelectContainerProps  {
  variant: 'red' | 'green'
  isSelected: boolean
}

const SELECT_CONTAINER_SIZE = (Dimensions.get('screen').width / 2) - 28 // 28 = 24 padding - 4 gap

export const SelectContainer = styled.TouchableOpacity<SelectContainerProps>`
  background-color: ${
    props => props.isSelected
      ? props.variant === 'red' 
        ? props.theme.colors.red300 
        : props.theme.colors.green300
      : props.theme.colors.gray200
  };

  border-width: ${props => props.isSelected ? 1 : 0}px;
  border-color: ${
    props => props.variant === 'red'
      ? props.theme.colors.red700
      : props.theme.colors.green700
  };

  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: ${SELECT_CONTAINER_SIZE}px;
`

export const SelectTitle = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.md};
  color: ${props => props.theme.colors.gray700};
`

interface StatusProps {
  variant: 'red' | 'green'
}

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${
    props => props.variant === 'red' 
      ? props.theme.colors.red700
      : props.theme.colors.green700
  };
`
