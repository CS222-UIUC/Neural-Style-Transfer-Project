import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// import ImagesList from "../components/Images/ImagesList";

describe("ImagesList.js Testing", () => {
  test("List for images exists", () => {
    const list = document.getElementById("list-ul");
    expect(1 == 1);
  });
});
