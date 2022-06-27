import React, {FC, useEffect} from 'react';
import {PageName} from "../../global/enums/global";
import {StatusBarOutline, StatusBarEmpty} from "./StatusBar.styles";
import styled from "styled-components/macro";

interface StatusBarProps {
    pageName: PageName
}

const StatusBar: FC<StatusBarProps> = (statusBarProps: StatusBarProps) => {

    const statusPercentage = 100 * (Object.values(PageName).indexOf(statusBarProps.pageName) / (Object.keys(PageName).length - 1));

    return (
        <StatusBarOutline>
            <StatusBarEmpty >
                <progress value={statusPercentage} max={100}/>
            </StatusBarEmpty>
        </StatusBarOutline>
    );
}

export default StatusBar;
