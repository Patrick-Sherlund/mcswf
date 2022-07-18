import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LeadershipCard from "./LeadershipCard";

describe("<LeadershipCard />", () => {
  test("it should mount", () => {
    render(
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
    );

    const leadershipCard = screen.getByTestId("LeadershipCard");

    expect(leadershipCard).toBeInTheDocument();
  });
});
