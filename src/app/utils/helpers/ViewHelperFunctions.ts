import { PageName } from "../../constants/enums/global";

export const getStatusPercentageFromPageName = (pageName: PageName) => {
  return (
    Object.values(PageName).indexOf(pageName) /
    (Object.keys(PageName).length - 1)
  );
};
