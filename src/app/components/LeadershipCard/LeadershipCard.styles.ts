import styled from "styled-components";
import { motion } from "framer-motion";

export const TeamCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: max-content;
  background-color: #3e3e3e;
  border: 0.5px solid #7e7e7e;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transform-style: preserve-3d;
  border-radius: 5px;
  padding: 0.4rem 0 0 0;
`;

export const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  background-color: #212121;
  border-radius: 5px;
  padding-bottom: 0.5rem;
  height: 95%;
  max-height: 95%;
  width: 95%;
`;

export const TeamPhoto = styled.img`
  width: 95%;
  height: fit-content;
  margin: 0.4rem auto 0;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

export const Title = styled.h2`
  width: 95%;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0.5rem auto 0;
`;

export const BilletContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0.5rem auto 0;
  align-items: center;
`;

export const Divider = styled.div`
  width: 15px;
  height: 0px;
  background-color: ${(props) => props.theme.borderRed};
  border: 1px solid ${(props) => props.theme.borderRed};
  transform: rotate(90deg);
`;

export const Billet = styled.h3`
  font-weight: lighter;
  font-size: 0.9rem;
  margin: 0;
`;

export const BarContainer = styled.div`
  width: 95%;
  padding: 0.2rem 0 0.1rem;
`;

export const Information = styled.button`
  appearance: none;
  margin: 0 0.8rem 0 0.4rem;
  border-radius: 4rem;
  background-color: ${(props) => props.theme.socials.backgroundColor};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: width 500ms, height 500ms;
  background-image: url(${(prop) => prop.theme.leadership.infoButton});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 2.2rem;
  width: 2.2rem;
  border: none;
  align-self: flex-end;
  z-index: 2;
`;

export const FrontCardContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export const BackCardContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: auto 0.3rem;
  align-self: center;
  position: fixed;
  padding: 0.2rem 0.5rem;
  height: 80%;
`;

export const AboutTitle = styled(Title)`
  margin-bottom: 1rem;
  width: max-content;
`;

export const AboutBody = styled.div`
  margin: 0 auto;
  position: relative;
  font-size: 0.85rem;
  color: black;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #eaeaea;
  padding: 0.5rem;
  overflow-y: scroll;
  height: 100%;
`;

export const AboutTitleUnderline = styled.div`
  margin-top: 0.25rem;
  margin-left: -0.25rem;
  border-bottom: 0.063rem solid ${(props) => props.theme.borderRed};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
  width: calc(100% + 0.5rem);
`;
