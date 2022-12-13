import styled from "styled-components/native";

export const StatsContainer = styled.View`
  flex: 1;
`
export const StatsContent = styled.View`
  margin-top: -30px;
  background-color: ${props => props.theme.colors.white};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 35px 24px;
  flex: 1;
  align-items: center;
`

export const StatsTitle = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.md};
  margin-bottom: 26px;
`
export const InfoCardContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

