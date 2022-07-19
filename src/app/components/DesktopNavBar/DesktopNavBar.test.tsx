import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DesktopNavBar from "./DesktopNavBar";
import { PageName } from "../../constants/enums/global";
import { darkTheme } from "../../constants/themes/DarkTheme";
import { ThemeProvider } from "styled-components";
import Home from "../../views/Home/Home";

describe("<DesktopNavBar />", () => {
  let container: RenderResult;
  jest.setTimeout(30000);

  beforeEach(() => {
    container = render(
      <ThemeProvider theme={darkTheme}>
        <DesktopNavBar
          selectedPageName={PageName.DISCIPLINES}
          navigationEventHandler={() => {}}
          themeEventHandler={() => {}}
        />
      </ThemeProvider>
    );
  });

  test("it should mount", () => {
    const navBar = container.getByTestId("NavBar");
    expect(navBar).toBeInTheDocument();
  });

  test("it should contain the logo and five links - Home, Learn More, Disciplines, The Team and Get Involved", () => {
    const logo: HTMLElement = container.getByTestId("main-logo");
    const homeLink: HTMLElement = container.getByTestId("Home");
    const learnMoreLink: HTMLElement = container.getByTestId("Learn More");
    const disciplinesLink: HTMLElement = container.getByTestId("Disciplines");
    const theTeamLink: HTMLElement = container.getByTestId("The Team");
    const getInvolvedLink: HTMLElement = container.getByTestId("Get Involved");
    const statusBar: HTMLElement = container.getByTestId("status-bar");

    expect(logo).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(learnMoreLink).toBeInTheDocument();
    expect(disciplinesLink).toBeInTheDocument();
    expect(theTeamLink).toBeInTheDocument();
    expect(getInvolvedLink).toBeInTheDocument();
    expect(statusBar).toBeInTheDocument();
  });
});
