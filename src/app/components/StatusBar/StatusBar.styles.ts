import styled from "styled-components";

export const StatusBarOutline = styled.div`
  width: 100%;
  height: 0.9rem;
  background-color: ${(props) => props.theme.navBar.statusBar.backgroundColor};
  margin: 0;
  box-shadow: 4px 2px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;

export const StatusBarEmpty = styled(StatusBarOutline)`
  margin: 0;
  height: 0.25rem;
  background-color: #dadada;
  display: flex;
  flex-direction: row;

  progress[value] {
    width: 100%;
    appearance: none;
    border: none;
    height: 0.25rem;
    ::-webkit-progress-bar {
      background-color: #dadada;
    }
    ::-moz-progress-bar {
      background-color: ${(props) => props.theme.borderRed};
    }
    ::-webkit-progress-value {
      background-color: ${(props) => props.theme.borderRed};
      -webkit-transition: width 0.2s ease;
      -moz-transition: width 0.2s ease;
      -o-transition: width 0.2s ease;
      transition: width 0.2s ease;
    }
  }
`;
