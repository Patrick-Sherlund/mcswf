import styled from "styled-components/macro";
import moon from "../../../assets/svg/dark/moon.svg"
import sun from "../../../assets/svg/light/sun.svg"

export const ToggleSwitchContainer = styled.div`
  position: absolute;
  right: 0;
  margin-right: 4rem;
  margin-top: 1rem;
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const Moon = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-image: url(${moon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-left: 3.05rem;
  margin-top: .25rem;
`;

export const Sun = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-image: url(${sun});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-top: .31rem;
  margin-left: .5rem;
  
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 5.5rem;
  height: 2.7rem;
  border-radius: 1.5rem;
  background: #2B2B2B;
  border: 1px solid #d4d4d4;
  cursor: pointer;

  ${Sun} {
    display: none;
  }

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 1.95rem;
    height: 1.95rem;
    margin: 5.3px;
    background: #d6d6d6;
    border: 1px solid #EAEAEA;
    box-shadow: inset -2px 2px 8px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
    
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  
  &:checked + ${CheckBoxLabel} {
    background: #eaeaea;
    border: 2px solid #b3b2b2;
    box-shadow: inset -2px 2px 8px rgba(0, 0, 0, 0.25);

    ${Moon} {
      display: none;
    }

    ${Sun} {
      display: inherit;
    }

    &::after {

      content: "";
      display: block;
      border-radius: 50%;
      width: 1.95rem;
      height: 1.95rem;
      background: #323232;
      border: 1px solid #eaeaea;
      box-shadow: inset 0px 0px 16px rgba(255, 255, 255, 0.55);
      transition: 0.2s;
      margin-left: 3.2rem;
    }
  }
`;
