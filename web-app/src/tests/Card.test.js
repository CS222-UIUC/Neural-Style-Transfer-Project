import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "../components/UI/Card";

describe("Card.js Testing", () => {
  test("Card id exists", () => {
    render(<Card />);
    const card = document.getElementById("Card");
    expect(card).toBeInTheDocument();
  });
});
