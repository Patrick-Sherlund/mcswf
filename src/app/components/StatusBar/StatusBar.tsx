import React, { FC } from "react";
import { PageName } from "../../constants/enums/global";
import { StatusBarOutline, StatusBarEmpty } from "./StatusBar.styles";

interface StatusBarProps {
  pageName: PageName;
}

const StatusBar: FC<StatusBarProps> = (statusBarProps: StatusBarProps) => {
  const statusPercentage =
    100 *
    (Object.values(PageName).indexOf(statusBarProps.pageName) /
      (Object.keys(PageName).length - 1));

  return (
    <StatusBarOutline>
      <StatusBarEmpty>
        <progress value={statusPercentage} max={100} />
      </StatusBarEmpty>
    </StatusBarOutline>
  );
};

export default StatusBar;
