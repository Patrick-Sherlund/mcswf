import React, {FC, ReactNode, useId} from 'react';
import {ToggleSwitchContainer, CheckBox, CheckBoxLabel, CheckBoxWrapper} from "./ToggleSwitch.styles";


interface ToggleSwitchProps {
    toggleEventHandler: () => void,
    toggleOnSvg?: string,
    toggleOffSvg?: string,
    children: ReactNode
}

const ToggleSwitch: FC<ToggleSwitchProps> = (props: ToggleSwitchProps) => {
    const toggleId = useId()
    return (
        <ToggleSwitchContainer>
            <CheckBoxWrapper>
                <CheckBox id={toggleId} type="checkbox" onChange={props.toggleEventHandler}/>
                <CheckBoxLabel htmlFor={toggleId} >
                    {props.children}
                </CheckBoxLabel>
            </CheckBoxWrapper>
        </ToggleSwitchContainer>
    );
}

export default ToggleSwitch;
