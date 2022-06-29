import React, { FC } from 'react';
import {ToggleSwitchContainer, CheckBox, CheckBoxLabel, CheckBoxWrapper, Moon, Sun} from "./ToggleSwitch.styles";


interface ToggleSwitchProps {
    themeEventHandler: () => void,
    toggleOnSvg?: string,
    toggleOffSvg?: string
}

const ToggleSwitch: FC<ToggleSwitchProps> = (props: ToggleSwitchProps) => (
    <ToggleSwitchContainer>
        <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" onChange={props.themeEventHandler}/>
            <CheckBoxLabel htmlFor="checkbox" >
                <Moon/><Sun/>
            </CheckBoxLabel>
        </CheckBoxWrapper>
    </ToggleSwitchContainer>
);

export default ToggleSwitch;
