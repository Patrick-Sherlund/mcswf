import React from "react";
import { render, RenderResult, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../global/themes/DarkTheme";

describe("<Home />", () => {
  let container: RenderResult;
  jest.setTimeout(30000);

  beforeEach(() => {
    container = render(
      <ThemeProvider theme={darkTheme}>
        <Home elementRef={() => null} />
      </ThemeProvider>
    );
  });

  test("it should mount", () => {
    const home = container.getByTestId("home-container");
    expect(home).toBeInTheDocument();
  });

  test("It should contain the title, description, social media buttons and navigation arrow", () => {
    const homeContainer: HTMLElement = container.getByTestId("home-container");
    const homeTitlePrimary: HTMLElement = container.getByTestId(
      "home-title-top-primary"
    );
    const homeTitleDivider: HTMLElement =
      container.getByTestId("home-title-divider");
    const homeTitleSecondary: HTMLElement = container.getByTestId(
      "home-title-top-secondary"
    );
    const homeContentLight: HTMLElement =
      container.getByTestId("home-content-light");
    const homeContentBold: HTMLElement =
      container.getByTestId("home-content-bold");
    const homeSocialFacebook: HTMLElement = container.getByTestId(
      "home-social-facebook"
    );
    const homeSocialInstagram: HTMLElement = container.getByTestId(
      "home-social-instagram"
    );
    const homeSocialLinkedin: HTMLElement = container.getByTestId(
      "home-social-linkedin"
    );
    const homeSocialTwitter: HTMLElement = container.getByTestId(
      "home-social-twitter"
    );
    const homeSocialYoutube: HTMLElement = container.getByTestId(
      "home-social-youtube"
    );
    const homeNavigationArrow: HTMLElement = container.getByTestId(
      "home-navigation-arrow"
    );

    expect(homeContainer).toBeInTheDocument();
    expect(homeTitlePrimary).toBeInTheDocument();
    expect(homeTitleDivider).toBeInTheDocument();
    expect(homeTitleSecondary).toBeInTheDocument();
    expect(homeContentLight).toBeInTheDocument();
    expect(homeContentBold).toBeInTheDocument();
    expect(homeSocialFacebook).toBeInTheDocument();
    expect(homeSocialInstagram).toBeInTheDocument();
    expect(homeSocialLinkedin).toBeInTheDocument();
    expect(homeSocialTwitter).toBeInTheDocument();
    expect(homeSocialYoutube).toBeInTheDocument();
    expect(homeNavigationArrow).toBeInTheDocument();
  });
  /*
  test('It should contain the title, description, social media buttons and navigation arrow', async () => {
    await new Promise((r) => setTimeout(r, 6800));

    const homeContainer: HTMLElement = container.getByTestId('home-container')
    const homeNavigationArrow: HTMLElement = container.getByTestId('home-navigation-arrow')
    const homeNavigationArrowLink: HTMLElement = container.getByTestId('home-navigation-arrow-link')

    expect(container.queryByTestId('learn-more-container')).not.toBeInTheDocument();
    expect(homeContainer).toBeInTheDocument();
    expect(homeNavigationArrow).toBeInTheDocument();



    await fireEvent.dblClick(homeNavigationArrowLink)
    await fireEvent.dblClick(homeNavigationArrow)

    await new Promise((r) => setTimeout(r, 6800));

    await expect(container.getByTestId('learn-more-container')).toBeInTheDocument();

  });*/
});
