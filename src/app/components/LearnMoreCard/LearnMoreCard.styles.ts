import styled from "styled-components/macro";

export const LearnMoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
  margin-left: 4rem;
  position: relative;
  padding: 1.825rem;
  height: 40%;
  width: 30rem;
  background-color: #f9f9f9;
  border: 1px solid #c0c2ca;
  box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &,
  &:before,
  &:after {
    box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &:before {
    right: 7px;
    top: 5px;
    z-index: -1;
    border-radius: 4px;
    background-color: #505460;
  }
  &:after {
    right: 12px;
    top: 10px;
    z-index: -2;
    border-radius: 4px;
    background-color: #414551;
  }
`;

export const VerticalDivider = styled.div`
  width: 15px;
  height: 0px;
  background-color: ${(props) => props.theme.borderRed};
  border: 1px solid ${(props) => props.theme.borderRed};
  transform: rotate(90deg);
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  margin: 0;
  color: black;
  font-weight: 600;
`;

export const Body = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: lighter;
`;
