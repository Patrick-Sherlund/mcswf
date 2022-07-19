import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LeadershipCard from "./LeadershipCard";
import { darkTheme } from "../../constants/themes/DarkTheme";
import { ThemeProvider } from "styled-components";

describe("<LeadershipCard />", () => {
  test("it should mount", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <LeadershipCard
          statusPercentage={1}
          billetCard={{
            title: "",
            billet: "",
            bio: "",
            photo: "",
            email: "",
          }}
        />
      </ThemeProvider>
    );

    const leadershipCard = screen.getByTestId("LeadershipCard");

    expect(leadershipCard).toBeInTheDocument();
  });
});
