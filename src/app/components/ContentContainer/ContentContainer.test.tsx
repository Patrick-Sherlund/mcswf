import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContentContainer from "./ContentContainer";
import { PageName } from "../../constants/enums/global";

describe("<ContentContainer />", () => {
  test("it should mount", () => {
    render(<ContentContainer currentPage={PageName.HOME} />);

    const contentContainer = screen.getByTestId("ContentContainer");

    expect(contentContainer).toBeInTheDocument();
  });
});
