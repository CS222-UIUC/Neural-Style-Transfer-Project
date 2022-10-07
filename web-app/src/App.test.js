import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App correctly with proper text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Neural Style Transfer Website/i);
  const paragraph = screen.getByText(/This website allows the user to upload a photo which is then styled using a machine learning model/i)
});

test('upload button appears', () => {
  render(<App />);
  const button = document.getElementById("upload");
  expect(button).toBeInTheDocument();
});

test('can upload file', () => {
  render(<App />);
  const button = document.getElementById("upload");
  fireEvent.change(button);
});