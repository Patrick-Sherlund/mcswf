import { render, RenderResult } from "@testing-library/react";
import React from "react";
import MobileNavBar from "./MobileNavBar";
import { PageName } from "../../constants/enums/global";

describe("<MobileNavBar />", () => {
  let container: RenderResult;

  beforeAll(() => {
    // container = render(<MobileNavBar animationControls={{}} currentPage={PageName.HOME} />);
  });

  test("it should mount", () => {
    const mobileNavBar = container.getByTestId("MobileNavBar");
    expect(mobileNavBar).toBeInTheDocument();
  });
});
