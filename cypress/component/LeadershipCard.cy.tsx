import * as React from "react";
import { mount } from "cypress/react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../src/app/constants/themes/DarkTheme";
import LeadershipCard from "../../src/app/components/LeadershipCard/LeadershipCard";
import { ContactCard } from "../../src/app/models/interfaces/ContactCard";
import { LeadershipContactCards } from "../../src/app/constants/data/leadership";

describe("LeadershipCard", function () {
  it("Should create <LeadershipCard>", () => {
    const contactCards: ContactCard[] = LeadershipContactCards;
    mount(
      <ThemeProvider theme={darkTheme}>
        {contactCards.map((contactCard) => {
          return <LeadershipCard billetCard={contactCard} />;
        })}
      </ThemeProvider>
    );
    cy.get(`[data-testid=back-content]`).first().should("not.be.visible");
    cy.get("button").first().click();
    cy.get(`[data-testid=back-content]`).first().should("be.visible");
    cy.get("button").first().click();
    cy.get(`[data-testid=back-content]`).first().should("not.be.visible");
  });
});
