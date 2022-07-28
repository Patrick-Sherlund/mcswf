import * as React from "react";
import App from "../../src/app/App";
import { mount } from "cypress/react";

describe("App", function () {
  it("Should create <App>", () => {
    mount(<App />);
    cy.get("[data-testid=theme-provider]").should("exist");
    cy.get("[data-testid=side-menu]").should("exist");
    cy.get("[data-testid=Desktop-Nav-Bar]").should("exist");
    cy.get("[data-testid=AppContainer]").should("exist");
    cy.get("[data-testid=Footer]").should("exist");
  });
});
