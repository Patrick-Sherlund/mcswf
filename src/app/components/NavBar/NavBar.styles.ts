import styled from "styled-components/macro";
import {devices} from "../../../index.styles";
import * as Scroll from 'react-scroll';

export const DesktopNavBar = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  @media screen and ${devices.tablet}{
    display: none;
  }
`;

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: max-content;
  background-color: ${props => props.theme.navBar.backgroundColor};
`;

export const Link = styled(Scroll.Link)`
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
  color: ${props => props.theme.inactiveTextColor};
  font-weight: lighter;
  list-style-type: none;
  align-content: center;
  cursor: pointer;
`

export const SelectedListItem = styled(ListItem)`
  font-weight: 600;
  color: ${props => props.theme.textColor};
`

export const UnderLine = styled.div`
  margin-top: .25rem;
  margin-left: -.25rem;
  border-bottom: .063rem solid #C20000;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.5);
  width: calc(100% + .5rem);
`
