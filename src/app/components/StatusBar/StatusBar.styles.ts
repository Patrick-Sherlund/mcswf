import styled from "styled-components/macro";

export const StatusBarOutline = styled.div`
  width: 100%;
  height: .9rem;
  background-color: ${props => props.theme.navBar.statusBar.backgroundColor};
  margin: 0;
  box-shadow: 4px 2px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`

export const StatusBarEmpty = styled(StatusBarOutline)`
  margin: 0;
  height: .25rem;
  background-color: #DADADA;
  display: flex;
  flex-direction: row;
`


