import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TheTeam from "./TheTeam";
import { Leadership } from "../../constants/data/leadership";

describe("<TheTeam />", () => {
  test("it should mount", () => {
    render(<TheTeam billetCards={Leadership} />);

    const theTeam = screen.getByTestId("TheTeam");

    expect(theTeam).toBeInTheDocument();
  });
});
