import { render, RenderResult } from "@testing-library/react";
import React from "react";
import MobileNavBar from "./MobileNavBar";
import { PageName } from "../../constants/enums/global";
import { useAnimation } from "framer-motion";

describe("<MobileNavBar />", () => {
  let container: RenderResult;

  beforeAll(() => {
    const animationControls = useAnimation();
    container = render(
      <MobileNavBar
        animationControls={animationControls}
        currentPage={PageName.HOME}
      />
    );
  });

  test("it should mount", () => {
    const mobileNavBar = container.getByTestId("mobile-nav-bar");
    expect(mobileNavBar).toBeInTheDocument();
  });
});
