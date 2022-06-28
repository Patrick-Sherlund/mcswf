import styled from "styled-components/macro";
import { devices } from "../index.styles";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${props => props.theme.backgroundImage}");
  background-color: ${props => props.theme.backgroundColor};
  background-attachment: fixed;
  background-size: contain;
  color: ${props => props.theme.textColor};
  font-family: DINNextLTPro, Inter, Segoe UI, sans-serif;
  transition: background 0.5s;
`;
