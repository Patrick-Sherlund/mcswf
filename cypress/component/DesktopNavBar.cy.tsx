import * as React from "react";
import { mount } from "cypress/react";
import DesktopNavBar from "../../src/app/components/DesktopNavBar/DesktopNavBar";
import { PageName } from "../../src/app/constants/enums/global";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../src/app/constants/themes/DarkTheme";

describe("DesktopNavBar", function () {
  it("Should create <DesktopNavBar>", () => {
    const selectedPage: PageName = PageName.HOME;
    const navigationEventHandlerSpy = cy.spy().as("navigationEventHandlerSpy");
    const themeEventHandlerSpy = cy.spy().as("themeEventHandlerSpy");
    mount(
      <ThemeProvider theme={darkTheme}>
        <DesktopNavBar
          navigationEventHandler={navigationEventHandlerSpy}
          selectedPageName={selectedPage}
          themeEventHandler={themeEventHandlerSpy}
        />
      </ThemeProvider>
    );
    cy.get(`[data-testid=Desktop-Nav-Bar]`).should("exist");
    cy.get(`[data-testid=NavBar]`).should("exist");
    cy.get(`[data-testid=main-logo]`).should("exist");
    cy.get(`[data-testid=desktop-nav-bar-selected-item]`).should("exist");
    cy.get(`[data-testid=desktop-nav-bar-selected-item]`).contains(
      selectedPage
    );
    /*
    cy.get(`[data-testid=${PageName.LEARN_MORE.replace(" ", "-")}]`).click();

    // Assert
    cy.get("@navigationEventHandlerSpy").should("have.been.called");*/
  });
});
