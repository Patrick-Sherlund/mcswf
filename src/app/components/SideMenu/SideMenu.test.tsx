import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SideMenu from "./SideMenu";
import { PageName } from "../../constants/enums/global";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../constants/themes/DarkTheme";

describe("<SideMenu />", () => {
  test("it should mount", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <SideMenu
          navigationEventHandler={() => {}}
          selectedPageName={PageName.DISCIPLINES}
        />
      </ThemeProvider>
    );

    const sideMenu = screen.getByTestId("side-menu");

    expect(sideMenu).toBeInTheDocument();
  });
});
