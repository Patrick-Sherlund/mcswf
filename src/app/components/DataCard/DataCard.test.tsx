import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DataCard from "./DataCard";

describe("<DataCard />", () => {
  test("it should mount", () => {
    //render(<DataCard />);

    const dataCard = screen.getByTestId("data-card");

    expect(dataCard).toBeInTheDocument();
  });
});
