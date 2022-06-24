import styled from "styled-components/macro";
import {devices} from "../../../index.styles";

export const DesktopNavBar = styled.div`
  @media screen and ${devices.tablet}{
    display: none;
  }
`;

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: max-content;
  background-color: #292929;
`;

export const Link = styled.a`
  text-decoration: none;
`

export const Logo = styled.img`
  padding: 1rem;
  width: 7.75rem;
  height: 8.75rem;
`

export const List = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  margin: auto 0 auto 0;
`

export const ListItem = styled.li`
  margin: 1rem;
  color: #CFCFCF;
  font-weight: lighter;
  list-style-type: none;
  align-content: center;
  cursor: pointer;
`

export const SelectedListItem = styled(ListItem)`
  font-weight: 600;
  color: white;
`

export const UnderLine = styled.div`
  margin-top: .25rem;
  margin-left: -.25rem;
  border-bottom: .063rem solid #C20000;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.5);
  width: calc(100% + .5rem);
`
