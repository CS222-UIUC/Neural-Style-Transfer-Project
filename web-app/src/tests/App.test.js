import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

// test("ImagesList: properly contains labels and images", () => {
//   var input = [{ label: "Donkey Kong", img: "./dk.webp", id: "12345678" }];

//   render(<ImagesList images={input} />);
//   const imageslist = screen.getByRole("Card");
//   expect(imageslist).toContainElement("img");
// });

describe("App.js Testing", () => {
  test("Label name input box exists", () => {
    render(<App />);
    const label = document.getElementById("Label");
    expect(label).toBeInTheDocument();
  });
});
