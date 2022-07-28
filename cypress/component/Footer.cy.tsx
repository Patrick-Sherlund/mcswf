import * as React from "react";
import { mount } from "cypress/react";
import Footer from "../../src/app/components/Footer/Footer";

describe("Footer", function () {
  it("Should create <Footer>", () => {
    mount(<Footer />);
    cy.get(`[data-testid=Footer]`).should("exist");
  });
});
