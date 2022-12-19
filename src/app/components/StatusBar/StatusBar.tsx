import React, { FC } from "react";
import { StatusBarEmpty, StatusBarOutline } from "./StatusBar.styles";

interface StatusBarProps {
  statusPercentage: number;
  denominator?: number;
}

const StatusBar: FC<StatusBarProps> = (statusBarProps: StatusBarProps) => {
  const statusPercentage: number = statusBarProps.statusPercentage;
  const denominator: number | undefined = statusBarProps.denominator;
  return (
    <StatusBarOutline data-testid={"status-bar"}>
      <StatusBarEmpty>
        <progress value={statusPercentage} max={denominator ?? 1} />
      </StatusBarEmpty>
    </StatusBarOutline>
  );
};

export default StatusBar;
