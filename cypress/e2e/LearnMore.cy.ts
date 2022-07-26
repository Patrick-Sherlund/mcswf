import {
  LearnMoreCardData,
  LearnMoreData,
} from "../../src/app/constants/data/learn-more";
import {
  CustomScreenResolutionData,
  DesktopTestData,
  MobileTestData,
  setViewport,
  TabletTestData,
} from "../helpers/device-variants";

describe("Learn More Page", () => {
  MobileTestData.map((cypressDeviceTestData, index) => {
    it(`Should load the learn more page and be swipe-able for ${cypressDeviceTestData.testDescription}`, () => {
      setViewport(cypressDeviceTestData.device);
      cy.visit("http://localhost:3000/");

      cy.wait(2000);
      cy.get("[data-testid=mobile-menu-toggle]").click();
      cy.wait(500);
      cy.get("[data-testid=mobile-link-Learn-More]").click();

      cy.get("[data-testid=learn-more-container]").should(
        "not.have.css",
        "opacity",
        "1"
      );
      cy.wait(1000);

      cy.get("[data-testid=learn-more-container]").should(
        "have.css",
        "opacity",
        "1"
      );

      LearnMoreCardData.map((learnMoreData, index) => {
        cy.get(`[data-testid=mobile-learn-more-card-title-${index}]`).should(
          "have.text",
          learnMoreData.title
        );
        cy.get(`[data-testid=mobile-learn-more-card-body-${index}]`).should(
          "have.text",
          learnMoreData.body
        );
        cy.get(`[data-testid=mobile-learn-more-card-${index}]`)
          .trigger("pointerdown", { which: 1 })
          .trigger("pointermove", "left")
          .trigger("pointerup", { force: true });
      });
      cy.get(
        `[data-testid=mobile-learn-more-footer-information-packet-svg`
      ).should("exist");

      cy.get(`[data-testid=learn-more-footer-talent-svg`).should("exist");

      cy.get(`[data-testid=learn-more-footer-talent-title]`).should(
        "have.text",
        LearnMoreData.talent.title
      );
      cy.get(`[data-testid=learn-more-footer-talent-sub-title]`).should(
        "have.text",
        LearnMoreData.talent.subTitle
      );
      cy.get(`[data-testid=learn-more-footer-rounded-teams-svg`).should(
        "exist"
      );

      cy.get(`[data-testid=learn-more-footer-rounded-teams-title]`).should(
        "have.text",
        LearnMoreData.roundedTeams.title
      );
      cy.get(`[data-testid=learn-more-footer-rounded-teams-sub-title]`).should(
        "have.text",
        LearnMoreData.roundedTeams.subTitle
      );
      cy.get(`[data-testid=learn-more-footer-agile-svg`).should("exist");

      cy.get(`[data-testid=learn-more-footer-agile-title]`).should(
        "have.text",
        LearnMoreData.agile.title
      );
      cy.get(`[data-testid=learn-more-footer-agile-sub-title]`).should(
        "have.text",
        LearnMoreData.agile.subTitle
      );
    });
  });

  [...CustomScreenResolutionData, ...DesktopTestData, ...TabletTestData].map(
    (cypressDeviceTestData) => {
      it(`Should load the learn more page and be viewable for ${cypressDeviceTestData.testDescription}`, () => {
        setViewport(cypressDeviceTestData.device);
        cy.visit("http://localhost:3000/");

        cy.wait(500);
        cy.get("[data-testid=desktop-link-Learn-More]").click();
        cy.wait(100);
        cy.get("[data-testid=learn-more-container]").should(
          "not.have.css",
          "opacity",
          "1"
        );
        cy.wait(1200);

        cy.get("[data-testid=learn-more-container]").should(
          "have.css",
          "opacity",
          "1"
        );
        LearnMoreCardData.map((learnMoreData, index) => {
          cy.get(`[data-testid=desktop-learn-more-card-title-${index}]`).should(
            "have.text",
            learnMoreData.title
          );
          cy.get(`[data-testid=desktop-learn-more-card-body-${index}]`).should(
            "have.text",
            learnMoreData.body
          );
        });

        cy.get(
          `[data-testid=desktop-learn-more-footer-information-packet-svg`
        ).should("exist");

        cy.get(`[data-testid=learn-more-footer-talent-svg`).should("exist");

        cy.get(`[data-testid=learn-more-footer-talent-title]`).should(
          "have.text",
          LearnMoreData.talent.title
        );
        cy.get(`[data-testid=learn-more-footer-talent-sub-title]`).should(
          "have.text",
          LearnMoreData.talent.subTitle
        );
        cy.get(`[data-testid=learn-more-footer-rounded-teams-svg`).should(
          "exist"
        );

        cy.get(`[data-testid=learn-more-footer-rounded-teams-title]`).should(
          "have.text",
          LearnMoreData.roundedTeams.title
        );
        cy.get(
          `[data-testid=learn-more-footer-rounded-teams-sub-title]`
        ).should("have.text", LearnMoreData.roundedTeams.subTitle);
        cy.get(`[data-testid=learn-more-footer-agile-svg`).should("exist");

        cy.get(`[data-testid=learn-more-footer-agile-title]`).should(
          "have.text",
          LearnMoreData.agile.title
        );
        cy.get(`[data-testid=learn-more-footer-agile-sub-title]`).should(
          "have.text",
          LearnMoreData.agile.subTitle
        );
      });
    }
  );
});
