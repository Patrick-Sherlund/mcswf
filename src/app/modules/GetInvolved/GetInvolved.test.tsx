import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GetInvolved from "./GetInvolved";

describe("<GetInvolved />", () => {
  test("it should mount", () => {
    render(<GetInvolved />);

    const getInvolved = screen.getByTestId("GetInvolved");

    expect(getInvolved).toBeInTheDocument();
  });
});
