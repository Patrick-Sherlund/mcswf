import styled from "styled-components";

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
  
  progress[value] {
    width: 100%;
    appearance: none;
    height: .25rem;
    ::-webkit-progress-bar{
      background-color: #DADADA;
    }
    ::-webkit-progress-value{
      background-color: #C20000;
      -webkit-transition : width .2s ease;
      -moz-transition : width .2s ease;
      -o-transition : width .2s ease;
      transition : width .2s ease;

    }
    
  }
`


