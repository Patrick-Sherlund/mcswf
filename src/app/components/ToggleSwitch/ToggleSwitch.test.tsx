import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToggleSwitch from "./ToggleSwitch";
import { CheckBoxLabel, Moon, Sun } from "./ToggleSwitch.styles";

describe("<ToggleSwitch />", () => {
  test("it should mount", () => {
    render(
      <ToggleSwitch
        children={
          <>
            <Moon />
            <Sun />
          </>
        }
        toggleEventHandler={() => {}}
      />
    );

    const toggleSwitch = screen.getByTestId("ToggleSwitch");

    expect(toggleSwitch).toBeInTheDocument();
  });
});
