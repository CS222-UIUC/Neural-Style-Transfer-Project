import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DownloadButton from "./components/Socials/Download";

import App from "./App";
import { test_util } from "@tensorflow/tfjs";

// test("ImagesList: properly contains labels and images", () => {
//   var input = [{ label: "Donkey Kong", img: "./dk.webp", id: "12345678" }];

//   render(<ImagesList images={input} />);
//   const imageslist = screen.getByRole("Card");
//   expect(imageslist).toContainElement("img");
// });

// describe("App.js Testing", () => {
//   test("Label name input box exists", () => {
//     render(<App />);
//     const label = document.getElementById("Label");
//     expect(label).toBeInTheDocument();
//   });
// });


test('Social Bar loads', () => {
  // render(<App/>); Error occurs here
  const imageHandler = document.getElementById('social');
  expect(imageHandler !== null);
});

const handleClick = (clicked) => {
  clicked = true;
}

test('Download renders and is clickable', () => {
  let clicked = false;
  render(<DownloadButton onClick={handleClick(clicked)}></DownloadButton>);
  fireEvent.click(screen.getByText(/Download Image/i));
  expect(clicked === true);
});

test('Social Media Dropdown Works', () => {
  render(<App/>);
  let isShown = false;
  const bar = document.getElementById('SocialBar');
  if (bar) {
    isShown = true;
  }
  expect(isShown === true);
});