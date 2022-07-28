import * as React from "react";
import { mount } from "cypress/react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../src/app/constants/themes/DarkTheme";
import MobileNavBar from "../../src/app/components/MobileNavBar/MobileNavBar";
import { PageName } from "../../src/app/constants/enums/global";
import { useAnimation } from "framer-motion";

describe("MobileNavBar", function () {
  it("Should create <MobileNavBar>", () => {
    const animationControls = useAnimation();

    mount(
      <ThemeProvider theme={darkTheme}>
        <MobileNavBar
          currentPage={PageName.DISCIPLINES}
          animationControls={animationControls}
        />
      </ThemeProvider>
    );
    cy.get(`[data-testid=mobile-nav-bar]`).first().should("be.visible");
  });
});
