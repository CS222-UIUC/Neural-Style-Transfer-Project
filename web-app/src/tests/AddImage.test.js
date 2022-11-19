import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AddImage from "../components/Images/AddImage";

describe("AddImage.js Testing", () => {
  test("Form exists", () => {
    render(<AddImage />);
    const form = document.getElementById("Form");
    expect(form).toBeInTheDocument();
  });
});
