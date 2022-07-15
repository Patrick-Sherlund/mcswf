import React, { FC } from "react";
import { StatusBarOutline, StatusBarEmpty } from "./StatusBar.styles";

interface StatusBarProps {
  statusPercentage: number;
}

const StatusBar: FC<StatusBarProps> = (statusBarProps: StatusBarProps) => {
  const statusPercentage: number = statusBarProps.statusPercentage;
  return (
    <StatusBarOutline>
      <StatusBarEmpty>
        <progress value={statusPercentage} max={1} />
      </StatusBarEmpty>
    </StatusBarOutline>
  );
};

export default StatusBar;
