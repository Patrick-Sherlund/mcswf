import * as React from "react";
import App from "../../src/app/App";
import { mount } from "cypress/react";

describe("App", function () {
  it("Should create <App>", () => {
    mount(<App />);
    cy.get("[data-testid=AppContainer]").should("exist");
  });
});
