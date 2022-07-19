import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LearnMoreCard from "./LearnMoreCard";

describe("<LearnMoreCard />", () => {
  test("it should mount", () => {
    //render(<LearnMoreCard />);

    const learnMoreCard = screen.getByTestId("LearnMoreCard");

    expect(learnMoreCard).toBeInTheDocument();
  });
});
