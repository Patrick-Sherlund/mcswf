import * as React from "react";
import { mount } from "cypress/react";
import AppContent from "../../src/app/components/AppContent/AppContent";
import { PageName } from "../../src/app/constants/enums/global";

describe("<AppContent>", function () {
  it("Should create <AppContent>", () => {
    mount(<AppContent currentPage={PageName.DISCIPLINES} />);
    cy.get(`[data-testid=app-content]`).should("exist");
    cy.get("[data-testid=home-container]").should("exist");
    cy.get("[data-testid=Disciplines]").should("exist");
    cy.get("[data-testid=TheTeam]").should("exist");
    cy.get("[data-testid=GetInvolved]").should("exist");
    cy.get("[data-testid=mobile-nav-bar]").should("exist");
  });
});
