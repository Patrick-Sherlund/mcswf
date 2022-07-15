import React, { FC } from "react";
import { StatusBarOutline, StatusBarEmpty } from "./StatusBar.styles";

interface StatusBarProps {
  statusPercentage: number;
  denominator?: number;
}

const StatusBar: FC<StatusBarProps> = (statusBarProps: StatusBarProps) => {
  const statusPercentage: number = statusBarProps.statusPercentage;
  const denominator: number | undefined = statusBarProps.denominator;
  return (
    <StatusBarOutline>
      <StatusBarEmpty>
        <progress value={statusPercentage} max={denominator ?? 1} />
      </StatusBarEmpty>
    </StatusBarOutline>
  );
};

export default StatusBar;
