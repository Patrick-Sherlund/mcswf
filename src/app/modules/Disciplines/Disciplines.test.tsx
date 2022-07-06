import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Disciplines from "./Disciplines";

describe("<Disciplines />", () => {
  test("it should mount", () => {
    render(<Disciplines />);

    const disciplines = screen.getByTestId("Disciplines");

    expect(disciplines).toBeInTheDocument();
  });
});
