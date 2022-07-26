import * as React from "react";
import BottomNavigator from "../../src/app/components/BottomNavigator/BottomNavigator";
import { mount } from "cypress/react";

describe("BottomNavigator", function () {
  it("Should create <BottomNavigator>", () => {
    const bottomNavigatorData = {
      desktopOffset: 0,
      mobileOffset: 0,
      navigationLink: "test-page",
    };
    mount(
      <BottomNavigator
        desktopOffset={bottomNavigatorData.desktopOffset}
        mobileOffset={bottomNavigatorData.mobileOffset}
        navigationLink={bottomNavigatorData.navigationLink}
      />
    );
    cy.get(
      `[data-testid=desktop-navigation-arrow-link-${bottomNavigatorData.navigationLink}]`
    ).should("exist");
  });
});
