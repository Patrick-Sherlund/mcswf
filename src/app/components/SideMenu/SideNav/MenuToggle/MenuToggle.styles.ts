import {motion} from "framer-motion";
import styled from "styled-components/macro";

export const MenuPath = styled(motion.path)`

`;

export const MenuButton = styled(motion.button)`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: fixed;
  top: .95rem;
  left: 0.9375rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: transparent;
  padding-top: .45rem;
  z-index: 25;
  
`;
