import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";
import { PageName } from "../../global/enums/global";

describe("<NavBar />", () => {
  let container: RenderResult;

  beforeAll(() => {
    container = render(
      <NavBar
        selectedPageName={PageName.HOME}
        navigationEventHandler={() => {}}
        themeEventHandler={() => {}}
      />
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
