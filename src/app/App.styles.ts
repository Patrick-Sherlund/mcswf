import styled from "styled-components/macro";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${(props) => props.theme.backgroundImage}");
  background-color: ${(props) => props.theme.backgroundColor};
  background-attachment: fixed;
  background-size: contain;
  color: ${(props) => props.theme.textColor};
  font-family: DINNextLTPro, Inter, Segoe UI, sans-serif;
  transition: background 0.5s;
  overflow-x: hidden;

  *::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }

  *::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    border: 1px solid #4d4d5b;
    background-color: #11171a;
    border-radius: 10px;
  }
`;
