import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PickStyles from "../components/Styles/PickStyles";

describe("PickStyles.js Testing", () => {
  test("Selection dropdown exists", () => {
    render(<PickStyles />);
    const select = document.getElementById("Select");
    expect(select).toBeInTheDocument();
  });
});
