import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TheTeam from "./TheTeam";
import { Leadership } from "../../constants/data/leadership";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../constants/themes/DarkTheme";

describe("<TheTeam />", () => {
  test("it should mount", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <TheTeam contactCards={Leadership} />
      </ThemeProvider>
    );

    const theTeam = screen.getByTestId("TheTeam");

    expect(theTeam).toBeInTheDocument();
  });
});
