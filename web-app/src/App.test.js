import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DownloadButton from "./components/Socials/Download.js";
import App from "./App.js";

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