import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContentContainer from "./ContentContainer";
import { PageName } from "../../constants/enums/global";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../constants/themes/DarkTheme";

describe("<ContentContainer />", () => {
  test("it should mount", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ContentContainer currentPage={PageName.HOME} />
      </ThemeProvider>
    );

    const contentContainer = screen.getByTestId("ContentContainer");

    expect(contentContainer).toBeInTheDocument();
  });
});
