import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StatusBar from "./StatusBar";
import { PageName } from "../../constants/enums/global";
import { darkTheme } from "../../constants/themes/DarkTheme";
import { ThemeProvider } from "styled-components";

describe("<StatusBar />", () => {
  test("it should mount", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <StatusBar statusPercentage={1} denominator={1} />
      </ThemeProvider>
    );

    const statusBar = screen.getByTestId("status-bar");

    expect(statusBar).toBeInTheDocument();
  });
});
