import styled from "styled-components/macro";
import {motion} from "framer-motion";
import * as Scroll from "react-scroll";

export const MenuListItem = styled(motion.li)`
  width: 100%;
  height: 3.6rem;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 23;
  transition: width 500ms, height 500ms;
`;


export const Link = styled(Scroll.Link)`
  text-decoration: none;
`

export const SelectedListItem = styled(MenuListItem)`
  background: #505050;
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.25);
  
`;

export const InactiveItemText = styled.span`
  font-size: 1.8rem;
  font-weight: lighter;
  color: #bfbfbf;
  padding-left: 2.8rem;
`;

export const SelectedItemText = styled(InactiveItemText)`
  font-weight: 600;
  color: #eaeaea;
  padding-left: .5rem;
`;

export const MiniDivider = styled(motion.div)`
  height: 1.8rem;
  width: .11rem;
  background-color: #C20000;
  transition: width 500ms, height 500ms;
  margin-left: 2.8rem;
  `;
