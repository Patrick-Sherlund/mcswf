import React, { FC } from 'react';
import {PageName} from "../../global/enums/global";
import {StatusBarOutline, StatusBarEmpty} from "./StatusBar.styles";
import styled from "styled-components/macro";

interface StatusBarProps {
    pageName: PageName
}

const StatusBar: FC<StatusBarProps> = (statusBarProps: StatusBarProps) => {
    const pageName: PageName = statusBarProps.pageName;
    const statusPercentage = Object.values(PageName).indexOf(pageName) / (Object.keys(PageName).length - 1);
    const StatusBarFill = styled(StatusBarEmpty)`
      width: calc(100% * ${statusPercentage});
      background-color: #C20000;
      animation: grow-status(1s);

      @keyframes grow-status {
        0% { width: 0; }
        100% { width: auto; }
      }
    `

    return (
        <StatusBarOutline>
            <StatusBarEmpty>
                <StatusBarFill/>
            </StatusBarEmpty>
        </StatusBarOutline>
    );
}

export default StatusBar;
