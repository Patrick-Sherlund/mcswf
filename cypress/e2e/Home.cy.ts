import {
  CustomScreenResolutionData,
  DesktopTestData,
  MobileTestData,
  setViewport,
  TabletTestData,
} from "../helpers/device-variants";
import { HomeData } from "../../src/app/constants/data/home";
import Chainable = Cypress.Chainable;

describe("Home Page", () => {
  [
    ...CustomScreenResolutionData,
    ...DesktopTestData,
    ...TabletTestData,
    ...MobileTestData,
  ].map((cypressDeviceTestData) => {
    it(`Should load the learn more page and be viewable for ${cypressDeviceTestData.testDescription}`, () => {
      setViewport(cypressDeviceTestData.device);

      cy.visit("http://localhost:3000/");

      const mobileNavTestId =
        "[data-testid=bottom-navigation-arrow-mobile-Learn-More]";
      const desktopNavTestId =
        "[data-testid=bottom-navigation-arrow-desktop-Learn-More]";
      const bottomNavArrow: Chainable =
        cy.get(desktopNavTestId) ?? cy.get(mobileNavTestId);

      cy.get("[data-testid=home-container]").should(
        "not.have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-content-light]").should(
        "not.have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-content-bold]").should(
        "not.have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-social-facebook]").should(
        "not.have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-social-instagram]").should(
        "not.have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-social-linkedin]").should(
        "not.have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-social-twitter]").should(
        "not.have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-social-youtube]").should(
        "not.have.css",
        "opacity",
        "1"
      );
      bottomNavArrow.should("not.have.css", "opacity", "1");

      cy.wait(2900);

      cy.get("[data-testid=home-container]").should("have.css", "opacity", "1");
      cy.get("[data-testid=home-title-top-primary]").should(
        "have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-title-divider]").should(
        "have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-title-top-secondary]").should(
        "have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-content-light]").should(
        "have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-content-bold]").should(
        "have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-social-facebook]").should(
        "have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-social-instagram]").should(
        "have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-social-linkedin]").should(
        "have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-social-twitter]").should(
        "have.css",
        "opacity",
        "1"
      );
      cy.get("[data-testid=home-social-youtube]").should(
        "have.css",
        "opacity",
        "1"
      );
      bottomNavArrow.should("have.css", "opacity", "1");

      cy.get(`[data-testid=home-title-top-primary]`).should(
        "have.text",
        HomeData.titles.titleTopPrimary
      );

      cy.get(`[data-testid=home-title-top-secondary]`).should(
        "have.text",
        HomeData.titles.titleTopSecondary
      );

      cy.get(`[data-testid=home-content-light]`).should(
        "have.text",
        HomeData.titles.subMessageLight
      );
      cy.get(`[data-testid=home-content-bold]`).should(
        "have.text",
        HomeData.titles.subMessageBold
      );

      if (!!cy.get(desktopNavTestId)) {
        cy.get(desktopNavTestId).click();
      } else {
        cy.get(mobileNavTestId).click();
      }

      cy.wait(1000);

      cy.get("[data-testid=learn-more-container]").should(
        "have.css",
        "opacity",
        "1"
      );
    });
  });
});
