import { PageName } from "../../constants/enums/global";

export const getStatusPercentageFromPageName = (
  pageName: PageName,
  denominator = 1
) => {
  return (
    denominator *
    (Object.values(PageName).indexOf(pageName) /
      (Object.keys(PageName).length - 1))
  );
};
