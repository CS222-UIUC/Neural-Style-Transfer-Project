import { render, screen } from '@testing-library/react';
import App from './App';
import uploadFile from './components/imageupload.js';

test('renders App correctly with proper text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Neural Style Transfer Website/i);
  const paragraph = screen.getByText(/This website allows the user to upload a photo which is then styled using a machine learning model/i)
});

test('button appears', () => {
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test('uploading a file works', () => {
  let num = uploadFile();
  expect(num == 10);
});