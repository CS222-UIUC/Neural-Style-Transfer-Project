import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../components/UI/Button";

describe("Button.js Testing", () => {
  test("button exists", () => {
    render(<Button />);
    const button = document.getElementById("Button");
    expect(button).toBeInTheDocument();
  });
});
