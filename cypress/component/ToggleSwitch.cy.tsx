import { mount } from "cypress/react";
import DesktopNavBar from "../../src/app/components/DesktopNavBar/DesktopNavBar";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../src/app/constants/themes/DarkTheme";
import ToggleSwitch from "../../src/app/components/ToggleSwitch/ToggleSwitch";
import * as React from "react";
import {
  Moon,
  Sun,
} from "../../src/app/components/ToggleSwitch/ToggleSwitch.styles";

describe("DesktopNavBar", function () {
  it("Should create <DesktopNavBar>", () => {
    const themeEventHandlerSpy = cy.spy().as("themeEventHandlerSpy");
    mount(
      <ThemeProvider theme={darkTheme}>
        <ToggleSwitch toggleEventHandler={themeEventHandlerSpy}>
          <Moon />
          <Sun />
        </ToggleSwitch>
      </ThemeProvider>
    );
    cy.get(`[data-testid=toggle-switch-label]`).click();

    // Assert
    cy.get("@themeEventHandlerSpy").should("have.been.called");
  });
});
